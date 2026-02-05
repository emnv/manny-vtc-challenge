<?php

declare(strict_types=1);

namespace App\Controller;

use App\Entity\Note;
use App\Repository\NoteRepository;
use App\Repository\UserRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Symfony\Component\Routing\Annotation\Route;

class NotesController extends AbstractController
{
    #[Route('/api/notes', name: 'api_notes_list', methods: ['GET'])]
    public function list(
        Request $request,
        SessionInterface $session,
        UserRepository $userRepository,
        NoteRepository $noteRepository
    ): JsonResponse {
        $userId = $session->get('user_id');
        
        if ($userId === null) {
            return $this->json(['message' => 'Unauthorized'], 401);
        }

        $user = $userRepository->find($userId);
        
        if ($user === null) {
            return $this->json(['message' => 'User not found'], 404);
        }

        $search = $request->query->get('search');
        $status = $request->query->get('status');
        $category = $request->query->get('category');

        $notes = $noteRepository->findByFilters(
            $user,
            $search,
            $status,
            $category
        );

        $categories = $noteRepository->findCategoriesByUser($user);

        return $this->json([
            'notes' => array_map(fn(Note $note) => $note->toArray(), $notes),
            'categories' => $categories
        ]);
    }

    #[Route('/api/notes', name: 'api_notes_create', methods: ['POST'])]
    public function create(
        Request $request,
        SessionInterface $session,
        UserRepository $userRepository,
        EntityManagerInterface $entityManager
    ): JsonResponse {
        $userId = $session->get('user_id');
        
        if ($userId === null) {
            return $this->json(['message' => 'Unauthorized'], 401);
        }

        $user = $userRepository->find($userId);
        
        if ($user === null) {
            return $this->json(['message' => 'User not found'], 404);
        }

        $payload = json_decode($request->getContent(), true);

        if (!is_array($payload)) {
            return $this->json(['message' => 'Invalid JSON payload.'], 400);
        }

        $title = trim((string) ($payload['title'] ?? ''));
        $content = trim((string) ($payload['content'] ?? ''));
        $category = trim((string) ($payload['category'] ?? ''));
        $status = trim((string) ($payload['status'] ?? 'new'));

        if ($title === '') {
            return $this->json(['message' => 'Title is required.'], 422);
        }

        if (!in_array($status, ['new', 'todo', 'done'], true)) {
            return $this->json(['message' => 'Invalid status. Must be: new, todo, or done'], 422);
        }

        $note = new Note();
        $note->setUser($user);
        $note->setTitle($title);
        $note->setContent($content);
        $note->setCategory($category);
        $note->setStatus($status);

        $entityManager->persist($note);
        $entityManager->flush();

        return $this->json([
            'message' => 'Note created successfully.',
            'note' => $note->toArray()
        ], 201);
    }

    #[Route('/api/notes/{id}', name: 'api_notes_update', methods: ['PUT'])]
    public function update(
        int $id,
        Request $request,
        SessionInterface $session,
        UserRepository $userRepository,
        NoteRepository $noteRepository,
        EntityManagerInterface $entityManager
    ): JsonResponse {
        $userId = $session->get('user_id');
        
        if ($userId === null) {
            return $this->json(['message' => 'Unauthorized'], 401);
        }

        $user = $userRepository->find($userId);
        
        if ($user === null) {
            return $this->json(['message' => 'User not found'], 404);
        }

        $note = $noteRepository->find($id);

        if ($note === null) {
            return $this->json(['message' => 'Note not found.'], 404);
        }

        if ($note->getUser()->getId() !== $user->getId()) {
            return $this->json(['message' => 'Access denied.'], 403);
        }

        $payload = json_decode($request->getContent(), true);

        if (!is_array($payload)) {
            return $this->json(['message' => 'Invalid JSON payload.'], 400);
        }

        if (isset($payload['title'])) {
            $title = trim((string) $payload['title']);
            if ($title === '') {
                return $this->json(['message' => 'Title cannot be empty.'], 422);
            }
            $note->setTitle($title);
        }

        if (isset($payload['content'])) {
            $note->setContent(trim((string) $payload['content']));
        }

        if (isset($payload['category'])) {
            $note->setCategory(trim((string) $payload['category']));
        }

        if (isset($payload['status'])) {
            $status = trim((string) $payload['status']);
            if (!in_array($status, ['new', 'todo', 'done'], true)) {
                return $this->json(['message' => 'Invalid status. Must be: new, todo, or done'], 422);
            }
            $note->setStatus($status);
        }

        $note->setUpdatedAt(new \DateTimeImmutable());
        $entityManager->flush();

        return $this->json([
            'message' => 'Note updated successfully.',
            'note' => $note->toArray()
        ]);
    }

    #[Route('/api/notes/{id}', name: 'api_notes_delete', methods: ['DELETE'])]
    public function delete(
        int $id,
        SessionInterface $session,
        UserRepository $userRepository,
        NoteRepository $noteRepository,
        EntityManagerInterface $entityManager
    ): JsonResponse {
        $userId = $session->get('user_id');
        
        if ($userId === null) {
            return $this->json(['message' => 'Unauthorized'], 401);
        }

        $user = $userRepository->find($userId);
        
        if ($user === null) {
            return $this->json(['message' => 'User not found'], 404);
        }

        $note = $noteRepository->find($id);

        if ($note === null) {
            return $this->json(['message' => 'Note not found.'], 404);
        }

        if ($note->getUser()->getId() !== $user->getId()) {
            return $this->json(['message' => 'Access denied.'], 403);
        }

        $entityManager->remove($note);
        $entityManager->flush();

        return $this->json(['message' => 'Note deleted successfully.']);
    }
}
