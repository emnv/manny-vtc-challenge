<?php

declare(strict_types=1);

namespace App\Controller;

use App\Repository\UserRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class ConfirmationController extends AbstractController
{
    #[Route('/confirm/{token}', name: 'app_confirm_account', methods: ['GET'])]
    public function confirm(
        string $token,
        UserRepository $userRepository,
        EntityManagerInterface $entityManager
    ): Response {
        $user = $userRepository->findOneBy(['confirmationToken' => $token]);

        if ($user === null) {
            return $this->render('confirmation.html.twig', [
                'success' => false,
                'message' => 'Invalid confirmation link.'
            ]);
        }

        if ($user->isConfirmed()) {
            return $this->render('confirmation.html.twig', [
                'success' => false,
                'message' => 'Account already confirmed.'
            ]);
        }

        $user->setIsConfirmed(true);
        $user->setConfirmationToken(null);

        $entityManager->flush();

        return $this->render('confirmation.html.twig', [
            'success' => true,
            'message' => 'Account confirmed successfully! You can now log in.'
        ]);
    }
}
