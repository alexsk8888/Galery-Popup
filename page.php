<?php

$sert = carbon_get_post_meta( $post->ID, 'sert' );
if(!empty($sert)){

    echo ' <div class="sertification">
    <h3 class="about_h2">' . blue_title('Сертификаты') . '</h3>
    <div class="images-boxes">';
$sert_counter=0;
foreach ( $sert as $item ): 

    echo'
    <div class="images-box">
    <div class="close_sert"></div>'
  
     . wp_get_attachment_image($item['image'], 'post-thumbnail', '', array( 'class' => 'one_sert', 'alt' => $item['alt'])). ' 

    </div>';


endforeach;
}

echo'
    
    <div class="images_bcgr"></div></div></div>';
