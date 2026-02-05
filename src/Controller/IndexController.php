<?php
declare(strict_types=1);

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class IndexController extends AbstractController
{
    #[Route('/', name: 'app_home', methods: ['GET'])]
    public function home(): Response
    {
        return $this->render('base.html.twig');
    }

    #[Route('/register', name: 'app_register_page', methods: ['GET'])]
    public function register(): Response
    {
        return $this->render('base.html.twig');
    }

    #[Route('/notes', name: 'app_notes', methods: ['GET'])]
    public function notes(): Response
    {
        return $this->render('base.html.twig');
    }
}
