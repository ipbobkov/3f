<?php

namespace App\DataFixtures;

use App\Entity\User;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

class AppFixtures extends Fixture
{
    /**
     * UserFixtures constructor
     */
    public function __construct(UserPasswordEncoderInterface $passwordEncoder){
        $this->passwordEncoder = $passwordEncoder;
    }

    public function load(ObjectManager $manager)
    {
        $user = new User();
        $user->setId(1);
        $user->setEmail('info71@list.ru');
        $user->setPassword($this->passwordEncoder->encodePassword($user, '123123'));
        $user->setRoles(['ROLE_ADMIN']);

        $user->setParentId(0);
        $user->setNameFirst('Andrew');
        $user->setNameNick('telebob');
        $user->setNameLast('Bobkov');

        $manager->persist($user);

        
        $user = new User();
        $user->setId(2);
        $user->setEmail('ipbobkov@mail.ru');
        $user->setPassword($this->passwordEncoder->encodePassword($user, '123123'));
        $user->setRoles(['ROLE_USER']);

        $user->setParentId(1);
        $user->setNameFirst('Vasiliy');
        $user->setNameNick('Suka');
        $user->setNameLast('Terkin');

        $manager->persist($user);


        $manager->flush();
    }
}
