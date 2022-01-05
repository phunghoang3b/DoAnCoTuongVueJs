<template>
    <iframe name="iframe1" id="iframe1" src="assets/img/video/nhaccotuong.mp3" frameborder="0" border="0" cellspacing="0" style="border-style: none;width: 0; height: 0;"></iframe>
   <!-- ##### Header Area Start ##### -->
  <header class="header_area">
    <div class="classy-nav-container breakpoint-off d-flex align-items-center justify-content-between">
        <!-- Classy Menu -->
        <nav class="classy-navbar" id="essenceNav">
            <!-- Logo -->
            <a class="nav-brand" href="/">Hexa-<em style="font-style: normal;color: orange;">Chess</em></a>
            <!-- Navbar Toggler -->
            <div class="classy-navbar-toggler">
                <span class="navbarToggler"></span>
            </div>
            <!-- Menu -->
            <div class="classy-menu">
                <!-- close btn -->
                <div class="classycloseIcon">
                    <div class="cross-wrap"><span class="top"></span><span class="bottom"></span></div>
                </div>
                <!-- Nav Start -->
                <div class="classynav">
                    <ul>
                        <li><a class="change" href="/">TRANG CHỦ</a></li>
                        <li><a class="change" href="/intro">GIỚI THIỆU</a></li>
                        <li><a class="change" href="/rule">CÁCH CHƠI</a></li>
                        <li><a class="change" href="/chat">CHAT GAME</a></li>
                        <li><a class="change" href="/profile">HỒ SƠ</a></li>
                        <li><a class="change" href="/addfriend">KẾT BẠN</a></li>                                      
                    </ul>
                </div>
                <!-- Nav End -->
            </div>
        </nav>
    </div>
</header>
<!-- ##### Header Area End ##### -->
    <router-view/>
<!-- ##### Footer Area Start ##### -->
<footer class="footer_area clearfix">
    <div class="container">
        <div class="row align-items-end">
            <!-- Single Widget Area -->
            <div class="col-12 col-md-6">
                <div class="single_widget_area">
                    <div class="footer_heading mb-30">
                        <h6>Đăng Ký Để Nhận Nhiều Thông Tin Về Cờ Tướng!</h6>
                    </div>
                    <div class="subscribtion_form">
                        <form>
                            <input type="email" name="mail" class="mail" placeholder="Nhập Email">
                            <button type="button" class="submit"><i class="fa fa-long-arrow-right" aria-hidden="true"></i></button>
                        </form>
                    </div>
                </div>
            </div>
            <!-- Single Widget Area -->
            <div class="col-12 col-md-6">
                <div class="single_widget_area" style="position: relative;margin-left: 68%;">
                    <div class="footer_social_area">
                        <a href="#" data-toggle="tooltip" data-placement="top" title="Facebook"><i class="fa fa-facebook" aria-hidden="true"></i></a>
                        <a href="#" data-toggle="tooltip" data-placement="top" title="Instagram"><i class="fa fa-instagram" aria-hidden="true"></i></a>
                        <a href="#" data-toggle="tooltip" data-placement="top" title="Twitter"><i class="fa fa-twitter" aria-hidden="true"></i></a>
                        <a href="#" data-toggle="tooltip" data-placement="top" title="Pinterest"><i class="fa fa-pinterest" aria-hidden="true"></i></a>
                        <a href="#" data-toggle="tooltip" data-placement="top" title="Youtube"><i class="fa fa-youtube-play" aria-hidden="true"></i></a>
                    </div>
                </div>
            </div>
        </div>

        <div class="row mt-5">
            <div class="col-md-12 text-center" style="margin-bottom:-25px">
                <p style="color:#fff">Bản quyền &copy;2021 | Được Design và Thiết kế bởi những ông hoàng HTML/ CSS</p>
            </div>
        </div>
    </div>
</footer>
<!-- ##### Footer Area End ##### -->
</template>

<script>
export default {
    name: 'App',
    components: {}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
