<?php

declare(strict_types=1);

namespace App\Repository;

use App\Entity\Note;
use App\Entity\User;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

class NoteRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Note::class);
    }

    /**
     * Find notes with optional filters
     *
     * @param User $user
     * @param string|null $search Search in title and content
     * @param string|null $status Filter by status
     * @param string|null $category Filter by category
     * @return Note[]
     */
    public function findByFilters(
        User $user,
        ?string $search = null,
        ?string $status = null,
        ?string $category = null
    ): array {
        $qb = $this->createQueryBuilder('n')
            ->where('n.user = :user')
            ->setParameter('user', $user)
            ->orderBy('n.updatedAt', 'DESC');

        if ($search !== null && $search !== '') {
            $qb->andWhere(
                $qb->expr()->orX(
                    $qb->expr()->like('n.title', ':search'),
                    $qb->expr()->like('n.content', ':search')
                )
            )->setParameter('search', '%' . $search . '%');
        }

        if ($status !== null && $status !== '') {
            $qb->andWhere('n.status = :status')
                ->setParameter('status', $status);
        }

        if ($category !== null && $category !== '') {
            $qb->andWhere('n.category = :category')
                ->setParameter('category', $category);
        }

        return $qb->getQuery()->getResult();
    }

    /**
     * Get all unique categories for a user
     *
     * @param User $user
     * @return string[]
     */
    public function findCategoriesByUser(User $user): array
    {
        $result = $this->createQueryBuilder('n')
            ->select('DISTINCT n.category')
            ->where('n.user = :user')
            ->andWhere('n.category != :empty')
            ->setParameter('user', $user)
            ->setParameter('empty', '')
            ->orderBy('n.category', 'ASC')
            ->getQuery()
            ->getResult();

        return array_column($result, 'category');
    }
}
