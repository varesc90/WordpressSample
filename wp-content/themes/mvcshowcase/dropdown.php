<?php
$categories = get_categories( array(
	'orderby' => 'name',
	'order'   => 'ASC'
) );


?>



<div id="dropdown">
    <ul id="category_list">
		<?php foreach($categories as $category):?>
            <li><a data-id = <?php echo $category->term_id;?> href=""><?php echo $category->name;?></a></li>
		<?php endforeach;?>
    </ul>

    <div id="category_description">
	    <?php foreach($categories as $category):?>
            <div class="category_preview" data-id="<?php echo $category->term_id;?>">
                <img src="<?php echo get_wp_term_image($category->term_id);?>" alt="Image Not Available"/>
            </div>
	    <?php endforeach;?>
    </div>
</div>