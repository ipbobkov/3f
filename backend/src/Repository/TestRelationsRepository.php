<?php

namespace App\Repository;

use App\Entity\TestRelations;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method TestRelations|null find($id, $lockMode = null, $lockVersion = null)
 * @method TestRelations|null findOneBy(array $criteria, array $orderBy = null)
 * @method TestRelations[]    findAll()
 * @method TestRelations[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class TestRelationsRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, TestRelations::class);
    }

    // /**
    //  * @return TestRelations[] Returns an array of TestRelations objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('t')
            ->andWhere('t.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('t.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?TestRelations
    {
        return $this->createQueryBuilder('t')
            ->andWhere('t.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
