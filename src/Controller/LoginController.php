<?php

declare(strict_types=1);

namespace App\Controller;

use App\Repository\UserRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\Component\Routing\Annotation\Route;

class LoginController extends AbstractController
{
    #[Route('/api/login', name: 'api_login', methods: ['POST'])]
    public function login(
        Request $request,
        UserRepository $userRepository,
        UserPasswordHasherInterface $passwordHasher,
        SessionInterface $session
    ): JsonResponse {
        $payload = json_decode($request->getContent(), true);

        if (!is_array($payload)) {
            return $this->json(['message' => 'Invalid JSON payload.'], 400);
        }

        $email = trim((string) ($payload['email'] ?? ''));
        $password = (string) ($payload['password'] ?? '');

        if ($email === '' || $password === '') {
            return $this->json(['message' => 'Email and password are required.'], 422);
        }

        $user = $userRepository->findOneBy(['email' => $email]);

        if ($user === null) {
            return $this->json(['message' => 'Invalid credentials.'], 401);
        }

        if (!$passwordHasher->isPasswordValid($user, $password)) {
            return $this->json(['message' => 'Invalid credentials.'], 401);
        }

        if (!$user->isConfirmed()) {
            return $this->json([
                'message' => 'Please confirm your email address before logging in.',
                'needsConfirmation' => true,
                'email' => $email
            ], 403);
        }

        // Create session
        $session->set('user_id', $user->getId());
        $session->set('user_email', $user->getEmail());

        return $this->json([
            'message' => 'Login successful.',
            'user' => [
                'id' => $user->getId(),
                'email' => $user->getEmail()
            ]
        ], 200);
    }

    #[Route('/api/logout', name: 'api_logout', methods: ['POST'])]
    public function logout(SessionInterface $session): JsonResponse
    {
        $session->invalidate();

        return $this->json(['message' => 'Logged out successfully.']);
    }

    #[Route('/api/check-session', name: 'api_check_session', methods: ['GET'])]
    public function checkSession(SessionInterface $session): JsonResponse
    {
        $userId = $session->get('user_id');
        $userEmail = $session->get('user_email');

        if ($userId === null || $userEmail === null) {
            return $this->json(['authenticated' => false]);
        }

        return $this->json([
            'authenticated' => true,
            'user' => [
                'id' => $userId,
                'email' => $userEmail
            ]
        ]);
    }

    #[Route('/api/resend-confirmation', name: 'api_resend_confirmation', methods: ['POST'])]
    public function resendConfirmation(
        Request $request,
        UserRepository $userRepository
    ): JsonResponse {
        $payload = json_decode($request->getContent(), true);

        if (!is_array($payload)) {
            return $this->json(['message' => 'Invalid JSON payload.'], 400);
        }

        $email = trim((string) ($payload['email'] ?? ''));

        if ($email === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
            return $this->json(['message' => 'Please provide a valid email address.'], 422);
        }

        $user = $userRepository->findOneBy(['email' => $email]);

        if ($user === null) {
            return $this->json(['message' => 'Email not found.'], 404);
        }

        if ($user->isConfirmed()) {
            return $this->json(['message' => 'Email is already confirmed.'], 400);
        }

        // Get the confirmation token
        $confirmationToken = $user->getConfirmationToken();

        if ($confirmationToken === null) {
            return $this->json(['message' => 'No confirmation token found.'], 400);
        }

        // Save confirmation email to var/emails directory
        $emailsDir = $this->getParameter('kernel.project_dir') . '/var/emails';
        if (!is_dir($emailsDir)) {
            mkdir($emailsDir, 0755, true);
        }

        $confirmationUrl = $request->getSchemeAndHttpHost() . '/confirm/' . $confirmationToken;
        $emailContent = $this->renderEmailTemplate($email, $confirmationUrl, true);

        file_put_contents(
            sprintf('%s/%s_%s_resent.html', $emailsDir, date('Y-m-d_His'), $email),
            $emailContent
        );

        return $this->json([
            'message' => 'Confirmation email has been resent. Check var/emails directory.',
            'confirmationUrl' => $confirmationUrl
        ], 200);
    }

    private function renderEmailTemplate(string $email, string $confirmationUrl, bool $isResend = false): string
    {
        $headerText = $isResend ? 'Confirmation Email Resent' : 'Welcome to VTC Challenge!';
        $introText = $isResend 
            ? 'You requested a new confirmation email for your VTC Challenge account.'
            : 'Thank you for registering with VTC Challenge! We\'re excited to have you on board.';
        
        return <<<HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Confirm Your Account</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f3f4f6;">
    <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f3f4f6; padding: 40px 20px;">
        <tr>
            <td align="center">
                <table width="100%" cellpadding="0" cellspacing="0" style="max-width: 600px; background-color: #ffffff; border-radius: 12px; box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08); overflow: hidden;">
                    <!-- Header -->
                    <tr>
                        <td style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 40px 30px; text-align: center;">
                            <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: 700; letter-spacing: -0.5px;">{$headerText}</h1>
                        </td>
                    </tr>
                    
                    <!-- Body -->
                    <tr>
                        <td style="padding: 40px 30px;">
                            <p style="margin: 0 0 20px; color: #374151; font-size: 16px; line-height: 1.6;">
                                Hi there,
                            </p>
                            <p style="margin: 0 0 20px; color: #374151; font-size: 16px; line-height: 1.6;">
                                {$introText}
                            </p>
                            <p style="margin: 0 0 30px; color: #374151; font-size: 16px; line-height: 1.6;">
                                To complete your registration and start using your account, please confirm your email address by clicking the button below:
                            </p>
                            
                            <!-- CTA Button -->
                            <table width="100%" cellpadding="0" cellspacing="0">
                                <tr>
                                    <td align="center" style="padding: 0 0 30px;">
                                        <a href="{$confirmationUrl}" style="display: inline-block; padding: 14px 40px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: #ffffff; text-decoration: none; border-radius: 8px; font-weight: 600; font-size: 16px; box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);">
                                            Confirm Your Account
                                        </a>
                                    </td>
                                </tr>
                            </table>
                            
                            <p style="margin: 0 0 20px; color: #6b7280; font-size: 14px; line-height: 1.6;">
                                Or copy and paste this link into your browser:
                            </p>
                            <p style="margin: 0 0 30px; padding: 12px; background-color: #f9fafb; border: 1px solid #e5e7eb; border-radius: 6px; color: #4b5563; font-size: 13px; word-break: break-all;">
                                {$confirmationUrl}
                            </p>
                            
                            <p style="margin: 0; color: #6b7280; font-size: 14px; line-height: 1.6;">
                                If you didn't create an account with us, you can safely ignore this email.
                            </p>
                        </td>
                    </tr>
                    
                    <!-- Footer -->
                    <tr>
                        <td style="background-color: #f9fafb; padding: 30px; text-align: center; border-top: 1px solid #e5e7eb;">
                            <p style="margin: 0 0 8px; color: #9ca3af; font-size: 12px;">
                                VTC Challenge &copy; 2026
                            </p>
                            <p style="margin: 0; color: #9ca3af; font-size: 12px;">
                                This is an automated message, please do not reply.
                            </p>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>
</html>
HTML;
    }
}
