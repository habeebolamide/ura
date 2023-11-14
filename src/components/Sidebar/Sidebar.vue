<template>
  <div class="sidebar-wrapper">
    <nav
        :class="{sidebar: true, sidebarStatic, sidebarOpened}"
        @mouseenter="sidebarMouseEnter"
        @mouseleave="sidebarMouseLeave"
    >
      <header class="logo" style="background: white;
    border-radius: 16px;">
        <img src="/img/logo.png" alt="Bi Med logo" width="100">

        <router-link to="/app/dashboard">
          <!-- <span class="primary-word">
          <img src="/img/cardLogo.png" style="height:25px;" alt=""></span>  -->
          <!-- <span class="secondary-word"> COInvest</span> -->
        </router-link>
      </header>

      <!-- <a class="generator-link navTit le " target="_blank" href="https://flatlogic.com/generator">Main modules</a> -->

      <!-- <h5 class="navTitle first">
        APP
      </h5> -->
      <ul class="nav">
        <NavLink
            :activeItem="activeItem"
            header="Dashboard"
            link="/app/dashboard"
            iconName="flaticon-homew"
            index="dashboard"
            isHeader
        />
        <NavLink
            :activeItem="activeItem"
            header="Banner"
            link="/app/manage-banners"
            iconName="flaticon-picture"
            index="banner"
            isHeader
        />
        
        <!-- <div class="bg-info" style="position:relative;width:100%;overflow:hidden"> -->
          <NavLink
              :activeItem="activeItem"
              header="Products"
              link="/app/manage-products/list"
              iconName="flaticon-pill-multiple"
              index="list"
              isHeader
          />
          <NavLink
              :activeItem="activeItem"
              header="Pathogens"
              link="/app/manage-pathogens/list"
              iconName="flaticon-pill-multiple"
              index="list"
              isHeader
          />
            <!-- <NavLink
              :activeItem="activeItem"
              header="Products History"
              link="/app/manage-products/history"
              iconName="flaticon-history"
              index="history"
              isHeader
          /> -->
          <!-- <span class="badge badge-warning">90</span> -->

        <!-- </div> -->
         <NavLink
            :activeItem="activeItem"
            header="Orders"
            link="/app/manage-orders/list"
            iconName="flaticon-order"
            index="manage-orders"
            isHeader
        />
         <!-- <NavLink
            :activeItem="activeItem"
            header="Invoice"
            link="/app/manage-invoice"
            iconName="flaticon-text-check"
            index="manage-invoice"
            isHeader
        /> -->
        <NavLink
            :activeItem="activeItem"
            header="Quotes"
            link="/app/quotes"
            iconName="flaticon-text-check"
            index="manage-quotes"
            isHeader
        />
        <NavLink
            :activeItem="activeItem"
            header="Transactions"
            link="/app/transactions"
            iconName="flaticon-archive"
            index="manage-transaction"
            isHeader
        />
        <!-- <NavLink
            :activeItem="activeItem"
            header="Coupon"
            link="/app/manage-coupons/list"
            iconName="flaticon-alert"
            index="manage-coupons"
            isHeader
        /> -->
        <NavLink
            :activeItem="activeItem"
            header="Categories"
            link="/app/manage-categories"
            iconName="flaticon-shape"
            index="manage-categories"
            isHeader
        />
        <NavLink
            :activeItem="activeItem"
            header="Sub Categories"
            link="/app/manage-subcategories"
            iconName="flaticon-shape"
            index="manage-subcategories"
            isHeader
        />
        <NavLink
            :activeItem="activeItem"
            header="Technology"
            link="/app/manage-technologies"
            iconName="flaticon-shape"
            index="manage-technologies"
            isHeader
        />
        <NavLink
            :activeItem="activeItem"
            header="Customers"
            link="/app/manage-customers/listing"
            iconName="flaticon-customers"
            index="manage-customers"
            isHeader
        />
        <NavLink
            :activeItem="activeItem"
            header="NewsLetter"
            link="/app/manage-news-letters"
            iconName="flaticon-customers"
            index="manage-customers"
            isHeader
        />
        <!-- <NavLink
            :activeItem="activeItem"
            header="Settings"
            link="/app/settings"
            iconName="flaticon-cog"
            index="settings"
            isHeader
        /> -->
        
      </ul>
      
    </nav>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import isScreen from '@/core/screenHelper';
import NavLink from './NavLink/NavLink';
import axios from "axios";
export default {
  name: 'Sidebar',
  components: { NavLink },
  data() {
    return {
      authType:'',
      alerts: [
        {
          id: 0,
          title: 'Sales Report',
          value: 15,
          footer: 'Calculating x-axis bias... 65%',
          color: 'danger',
        },
        {
          id: 1,
          title: 'Personal Responsibility',
          value: 20,
          footer: 'Provide required notes',
          color: 'primary',
        },
      ],
    };
  },
  methods: {
    ...mapActions('layout', ['changeSidebarActive', 'switchSidebar']),
    setActiveByRoute() {
      const paths = this.$route.fullPath.split('/');
      paths.pop();
      this.changeSidebarActive(paths.join('/'));
    },
    sidebarMouseEnter() {
      if (!this.sidebarStatic && (isScreen('lg') || isScreen('xl'))) {
        this.switchSidebar(false);
        this.setActiveByRoute();
      }
    },
    sidebarMouseLeave() {
      if (!this.sidebarStatic && (isScreen('lg') || isScreen('xl'))) {
        this.switchSidebar(true);
        this.changeSidebarActive(null);
      }
    },
     
    getUserType(){
         const auth_user = JSON.parse(localStorage.getItem('auth_info'))[0]  || null;
        if(auth_user) {
          axios
            .get(this.dynamic_auth_route('/user_type'),
            {
              headers:{
                authorization: `Bearer ${auth_user.auth_token}`
              }
            })
            .then(res => {
              this.authType = res.data;
            })
            .catch(err => {
              if(err.response.status == 401 && err.response.data.message == "Unauthenticated.") {
                return this.logoutUser();

              }
            })
            .finally(() => {
              this.loading = false
            });
          
        }
    },
  },
  created() {
    this.setActiveByRoute();
  },
  mounted() {
    this.getUserType({url:this.dynamic_auth_route('/user_type')});
  },
  computed: {
    ...mapState('layout', {
      sidebarStatic: state => state.sidebarStatic,
      sidebarOpened: state => !state.sidebarClose,
      activeItem: state => state.sidebarActiveElement,
    }),
  },
};
</script>

<!-- Sidebar styles should be scoped -->
<style src="./Sidebar.scss" lang="scss" scoped/>
<style scoped>
.sidebarStatic .logo{
  width: fit-content;
}.logo{
  text-align: left !important;
}
</style>
