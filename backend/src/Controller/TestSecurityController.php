<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class TestSecurityController extends AbstractController
{
    /**
     * @Route("/test/security", name="test_security")
     */
    public function index()
    {
        return $this->render('test_security/index.html.twig', [
            'controller_name' => 'TestSecurityController',
        ]);
    }
}
