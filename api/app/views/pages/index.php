<h1><?php echo $data['title']; ?></h1>
<?php echo APPROOT; ?>

<h1>This is pages/index</h1>


<?php require APPROOT.'\views\inc\navbar.php'; ?>

<h4><u>POSTS</u></h4>

<?php foreach($data['posts'] as $post): ?>
<div style="border:1px solid black; width:25%;margin:5px;" >
    <div>
        Written by <b><?php echo $post->tusername; ?></b> on <?php echo $post->adate; ?>
    </div>
    <div ><?php echo $post->csubject; ?></div>
    <p><?php echo $post->abody ?></p>
</div>

<?php endforeach; ?>



