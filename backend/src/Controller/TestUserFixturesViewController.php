<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Doctrine\ORM\EntityManagerInterface;
use App\Entity\User;


class TestUserFixturesViewController extends AbstractController
{
    /**
     * @Route("/test/user/fixtures/view", name="test_user_fixtures_view")
     */
    public function index(EntityManagerInterface $em)
    {
        $repository = $em->getRepository(User::class);
        $users=$repository->findAll();

        dd($users);
    }
}
