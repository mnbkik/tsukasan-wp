WordPress化手順

1⃣ 新規ファイル作成する（必要ファイル群を作る）
・front-page.php
・news.php
・single-news.php

headerとfooterのphpファイルを作成
functions.phpファイルを作成

2⃣ すべてのhtmlファイルをphpファイルに書き替える（必要ファイル群を移す）
index.html → index.php
news.html → news.php
works.html → works.php
single-news  single-news.php

3⃣ テンプレートタグに置き換える
すべてのhtmlファイルからheaderとfooterを削除する
header.phpとfooter.php以外のすべてのphpファイルにget_headerとget_footerを書く
style.cssを読み込ませる

画像をphpのコードに書き替える
<!-- <img src="<?php echo get_template_directory_uri(); ?>/images/FV-1.png"> -->

ブログタイトルをphpのコードに書き替える
<!-- <?php the_title( ); ?> -->

4⃣ localで新規作成
