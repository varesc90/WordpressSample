<?php
$categories = get_categories( array(
	'orderby' => 'name',
	'order'   => 'ASC'
) );


?>



<div id="dropdown">
    <ul id="category_list">
		<?php foreach($categories as $category):?>
            <li><a class="category_link" data-id = <?php echo $category->term_id;?> href=""><label><?php echo $category->name;?></label>
                - <?php echo $category->description;?></a></li>
		<?php endforeach;?>
    </ul>

    <div id="category_description">
	    <?php foreach($categories as $category):?>
            <div class="category_preview" data-id="<?php echo $category->term_id;?>">
                <div id="filter"></div>
                <div class="category_thumb" style="background-image: url('<?php echo get_wp_term_image($category->term_id)?>')">
                </div>
            </div>
	    <?php endforeach;?>
    </div>
</div>