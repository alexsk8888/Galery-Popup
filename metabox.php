<?php
use Carbon_Fields\Container;
use Carbon_Fields\Field;



Container::make("post_meta", "Сертификаты")
 
->show_on_template("templates/front-page.php")
->add_fields( array(

    Field::make( 'complex', 'sert', 'Блок "плитка"  максимум 20шт' )->set_layout( 'tabbed-horizontal' )->set_max( 20 )
    ->add_fields( array(
        Field::make( 'image', 'image', __( ' изображение' ))->set_width( 10 ),
        Field::make( 'textarea', 'alt', __( ' "Alt" иконки' ))->set_width( 10 ))),
    

    ) );