import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterModule } from './footer/footer.module';
import { HeaderModule } from './header/header.module';
import { SidebarModule } from './sidebar/sidebar.module';

                //  "./node_modules/@angular/material/prebuilt-themes/indigo-pink.css",
                //             "src/styles.css",
                //             "./node_modules/bootstrap/dist/css/bootstrap.css",
                //             "./node_modules/mdb-ui-kit/css/mdb.min.css",
                //             "https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css",
                // "./node_modules/admin-lte/plugins/fontawesome-free/css/all.min.css",
                // "./node_modules/admin-lte/plugins/tempusdominus-bootstrap-4/css/tempusdominus-bootstrap-4.min.css",
                // "./node_modules/admin-lte/plugins/icheck-bootstrap/icheck-bootstrap.min.css",
                // "./node_modules/admin-lte/plugins/jqvmap/jqvmap.min.css",
                // "./node_modules/admin-lte/dist/css/adminlte.min.css",
                // "./node_modules/admin-lte/plugins/overlayScrollbars/css/OverlayScrollbars.min.css",
                // "./node_modules/admin-lte/plugins/daterangepicker/daterangepicker.css",
                // "./node_modules/admin-lte/plugins/summernote/summernote-bs4.min.css"

                // "./node_modules/jquery/dist/jquery.min.js",
                // "./node_modules/popper.js/dist/umd/popper.min.js",
                // "./node_modules/bootstrap/dist/js/bootstrap.min.js",
                // "./node_modules/mdb-ui-kit/js/mdb.min.js",
                // "./node_modules/admin-lte/plugins/jquery/jquery.min.js",
                // "./node_modules/admin-lte/plugins/jquery-ui/jquery-ui.min.js",
                // "./node_modules/admin-lte/plugins/bootstrap/js/bootstrap.bundle.min.js",
                // "./node_modules/admin-lte/plugins/chart.js/Chart.min.js",
                // "./node_modules/admin-lte/plugins/sparklines/sparkline.js",
                // "./node_modules/admin-lte/plugins/jqvmap/jquery.vmap.min.js",
                // "./node_modules/admin-lte/plugins/jqvmap/maps/jquery.vmap.usa.js",
                // "./node_modules/admin-lte/plugins/jquery-knob/jquery.knob.min.js",
                // "./node_modules/admin-lte/plugins/moment/moment.min.js",
                // "./node_modules/admin-lte/plugins/daterangepicker/daterangepicker.js",
                // "./node_modules/admin-lte/plugins/tempusdominus-bootstrap-4/js/tempusdominus-bootstrap-4.min.js",
                // "./node_modules/admin-lte/plugins/summernote/summernote-bs4.min.js",
                // "./node_modules/admin-lte/plugins/overlayScrollbars/js/jquery.overlayScrollbars.min.js",
                // "./node_modules/admin-lte/dist/js/adminlte.js",
                // "./node_modules/admin-lte/dist/js/demo.js",
                // "./node_modules/admin-lte/dist/js/pages/dashboard.js"

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule, 

  ]
})
export class LayoutModule { }
