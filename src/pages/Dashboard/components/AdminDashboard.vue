<template>
    <div data-app>
        <div class="card">
            <div class="card-body px-3">
                <b-row>
                    <b-col cols="12" class="" md="8">
                      <h2 class="mb-4">Sale Report</h2>
                      <div class="filter text-right">
                        <div class="dropdown">
                        
                          <b-dropdown v-ripple.400="'rgba(30, 30, 30, 0.15)'" text="Filter" id="two" variant="flat-dark">
                            <b-dropdown-item @click="fetchData(6)">
                              Last 7 days
                            </b-dropdown-item>
                            <b-dropdown-item @click="fetchData(13)">
                              Last 2 weeks
                            </b-dropdown-item>
                            <b-dropdown-item @click="fetchData(30)">
                              Last 1 month
                            </b-dropdown-item>
                        
                          </b-dropdown>
                        </div>

                      </div>

                        <vue-apex-charts
                          v-if="status"
                            class=" mt-3"
                            type="line"
                            :height="number"
                            :options="revenueComparisonLine.chartOptions"
                            :series="revenueComparisonLine.series"
                        />
                    </b-col>
                    
        
                    <b-col md="4" cols="12" class="">
                        <h2>Statics</h2>
                        <div class="">
                            <div class="card">
                                <div class="card-body p-0">
                                <div class="small-box">
                                    <div class="d-flex inner">
                                    <div>
                                        <h3>&#8358; {{stats ? Number(stats.income).toLocaleString() : 0}}</h3>
                                        <p>Total Income</p>
                                    </div>
                                    <span class="b-avatar badge-light-warning rounded-circle ml-auto" style="width: 58px; height: 58px;">
                                        <span class="b-avatar-custom">
                                        <svg data-v-254b7dbb="" xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-watch"><circle data-v-254b7dbb="" cx="12" cy="12" r="7"></circle><polyline data-v-254b7dbb="" points="12 9 12 12 13.5 13.5"></polyline><path data-v-254b7dbb="" d="M16.51 17.35l-.35 3.83a2 2 0 0 1-2 1.82H9.83a2 2 0 0 1-2-1.82l-.35-3.83m.01-10.7l.35-3.83A2 2 0 0 1 9.83 1h4.35a2 2 0 0 1 2 1.82l.35 3.83"></path></svg>
                                        </span><!---->
                                    </span>
                                    </div>
                                    <!-- <a href="#" class="small-box-footer">More info <i class="fas fa-arrow-circle-right"></i></a> -->
                                </div>
                                </div>
                            </div>
                        </div>
                        <div class="">
                            <div class="card">
                                <div class="card-body p-0">
                                <div class="small-box">
                                    <div class="d-flex inner">
                                    <div>
                                        <h3> {{stats ? Number(stats.orders).toLocaleString() : 0}}</h3>
                                        <p>Orders</p>
                                    </div>
                                    <span class="b-avatar badge-light-warning rounded-circle ml-auto" style="width: 58px; height: 58px;">
                                        <span class="b-avatar-custom">
                                        <svg data-v-254b7dbb="" xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-watch"><circle data-v-254b7dbb="" cx="12" cy="12" r="7"></circle><polyline data-v-254b7dbb="" points="12 9 12 12 13.5 13.5"></polyline><path data-v-254b7dbb="" d="M16.51 17.35l-.35 3.83a2 2 0 0 1-2 1.82H9.83a2 2 0 0 1-2-1.82l-.35-3.83m.01-10.7l.35-3.83A2 2 0 0 1 9.83 1h4.35a2 2 0 0 1 2 1.82l.35 3.83"></path></svg>
                                        </span><!---->
                                    </span>
                                    </div>
                                    <!-- <a href="#" class="small-box-footer">More info <i class="fas fa-arrow-circle-right"></i></a> -->
                                </div>
                                </div>
                            </div>
                        </div>
                        <div class="">
                            <div class="card">
                                <div class="card-body p-0">
                                <div class="small-box">
                                    <div class="d-flex inner">
                                    <div>
                                        <h3> {{stats ? Number(stats.delivered_orders).toLocaleString() : 0}}</h3>
                                        <p>DELIVERED ORDERS</p>
                                    </div>
                                    <span class="b-avatar badge-light-warning rounded-circle ml-auto" style="width: 58px; height: 58px;">
                                        <span class="b-avatar-custom">
                                        <svg data-v-254b7dbb="" xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-watch"><circle data-v-254b7dbb="" cx="12" cy="12" r="7"></circle><polyline data-v-254b7dbb="" points="12 9 12 12 13.5 13.5"></polyline><path data-v-254b7dbb="" d="M16.51 17.35l-.35 3.83a2 2 0 0 1-2 1.82H9.83a2 2 0 0 1-2-1.82l-.35-3.83m.01-10.7l.35-3.83A2 2 0 0 1 9.83 1h4.35a2 2 0 0 1 2 1.82l.35 3.83"></path></svg>
                                        </span><!---->
                                    </span>
                                    </div>
                                    <!-- <a href="#" class="small-box-footer">More info <i class="fas fa-arrow-circle-right"></i></a> -->
                                </div>
                                </div>
                            </div>
                        </div>
                        <!-- <div class="h-100">
                        <div class="card">
                            <div class="card-body p-0">
                            <div class="small-box">
                                <div class="d-flex inner">
                                <div>
                                    <h3>&#8358; {{stats ? Number(stats.total_transactions).toLocaleString() : 0}}</h3>
                                    <p>Orders</p>
                                </div>
                                <span class="b-avatar badge-light-warning rounded-circle ml-auto" style="width: 58px; height: 58px;">
                                    <span class="b-avatar-custom">
                                    <svg data-v-254b7dbb="" xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-watch"><circle data-v-254b7dbb="" cx="12" cy="12" r="7"></circle><polyline data-v-254b7dbb="" points="12 9 12 12 13.5 13.5"></polyline><path data-v-254b7dbb="" d="M16.51 17.35l-.35 3.83a2 2 0 0 1-2 1.82H9.83a2 2 0 0 1-2-1.82l-.35-3.83m.01-10.7l.35-3.83A2 2 0 0 1 9.83 1h4.35a2 2 0 0 1 2 1.82l.35 3.83"></path></svg>
                                    </span>
                                </span>
                                </div>
                                <a href="#" class="small-box-footer">More info <i class="fas fa-arrow-circle-right"></i></a>
                            </div>
                            </div>
                        </div>
                        </div> -->
                    </b-col>
        
                </b-row>

            </div>
        </div>
        <b-row>
          <b-col cols="12" md="8">
            <Widget title="<h5>Categories per purchase</h5>" bodyClass="widget-table-overflow" customHeader>
              <div class="px-3">
                <!-- <VueElementLoading
                                    :active="loading3"
                                    spinner="bar-fade-scale"
                                    color="var(--primary)"
                                /> -->
                <vue-apex-charts v-if="status2" class=" mt-3" type="bar" :height="number"
                  :options="revenueComparisonLine1.chartOptions" :series="revenueComparisonLine1.series" />
              </div>
            </Widget>
          </b-col>
            <b-col md="4">
            <Widget
                title="<h5>Categories <span class='fw-semi-bold'>Slug and name</span></h5>"
                bodyClass="widget-table-overflow"
                customHeader
            >
                <div class="table-responsive mt-3">
                    <!-- <VueElementLoading
                        :active="loading2"
                        spinner="bar-fade-scale"
                        color="var(--primary)"
                    /> -->
                  <table class="table table-striped table-lg mb-0 requests-table">
                      <thead>
                      <tr class="text-muted">
                          <th>SLUG</th>
                          <th>CATEGORY </th>
                          
                      </tr>
                      </thead>
                      <tbody>
                      <tr
                        v-for="(cat, i) in categories_by_name" :key="i"
                      >
                          <td>
                           {{cat.slug}}
                          </td>
                          <td>{{cat.category_name}}</td>
                          
                          </td>
                      </tr>
                      </tbody>
                  </table>
                </div>
            </Widget>
            </b-col>
        </b-row>
        
    </div>
</template>
<script>
import Widget from '@/components/Widget/Widget';
import VueElementLoading from 'vue-element-loading'
import BigStat from './BigStat/BigStat';
import mock from '../mock';
import Bar from '../Bar'
import { Chart } from 'highcharts-vue';
import { mapState, mapActions } from 'vuex';
import axios from "axios"
import VueApexCharts from 'vue-apexcharts'

// import laravelVuePagination from 'laravel-vue-pagination'
export default {
  name: 'Dashboard',
  components: {
    Bar, Widget, BigStat, highcharts: Chart, VueElementLoading,VueApexCharts,
  },
  data() {
    return {
      mock,
      dialog:false,
      chartData: {name:["Product 1", "Product 2", "Product 3"], values: [0,20,5]},
      tableData: {},
      revenueComparisonLine: {
        series: [
          {
            name: 'This Month',
            data: [45000, 47000, 44800, 47500, 45500, 48000, 46500, 48600],
            // data: [11,2,4,30,9],
          },
          
        ],
        chartOptions: {
          chart: {
            toolbar: { show: false },
            zoom: { enabled: false },
            type: 'line',
            offsetX: -10,
          },
          stroke: {
            curve: 'smooth',
            dashArray: [0, 12],
            width: [4, 3],
          },
          legend: {
            show: false,
          },
          colors: ['#d0ccff', '#ebe9f1'],
          fill: {
            type: 'gradient',
            gradient: {
              shade: 'dark',
              inverseColors: false,
              gradientToColors: ['#ebe9f1','#ebe9f1'],
              shadeIntensity: 1,
              type: 'horizontal',
              opacityFrom: 1,
              opacityTo: 1,
              stops: [0, 100, 100, 100],
            },
          },
          markers: {
            size: 0,
            hover: {
              size: 5,
            },
          },
          xaxis: {
            labels: {
              style: {
                colors: '#b9b9c3',
                fontSize: '1rem',
              },
            },
            axisTicks: {
              show: false,
            },
            categories: ['01', '05', '09', '13', '17', '21', '26', '31'],
            axisBorder: {
              show: false,
            },
            tickPlacement: 'on',
          },
          yaxis: {
            tickAmount: 5,
            labels: {
              style: {
                colors: '#b9b9c3',
                fontSize: '1rem',
              },
              formatter(val) {
                return val > 999 ? `${(val / 1000).toFixed(0)}k` : val
              },
            },
          },
          grid: {
            borderColor: '#e7eef7',
            padding: {
              top: -20,
              bottom: -10,
              left: 20,
            },
          },
          tooltip: {
            x: { show: false },
          },
        },
      },
      revenueComparisonLine1: {
        series: [{
          data: [
            
          ]
        }],
        chartOptions: {
          chart: {
            toolbar: { show: false },
            zoom: { enabled: false },
            type: 'bar',
            offsetX: -10,
          },

          legend: {
            show: false,
          },
          tooltip: {
            x: {
              show: true,

            },
          },
          // colors: ['#d0ccff', '#ebe9f1'],
          // fill: {
          //   type: 'gradient',
          //   gradient: {
          //     shade: 'dark',
          //     inverseColors: false,
          //     gradientToColors: ['#ebe9f1', '#ebe9f1'],
          //     shadeIntensity: 1,
          //     type: 'horizontal',
          //     opacityFrom: 1,
          //     opacityTo: 1,
          //     stops: [0, 100, 100, 100],
          //   },
          // },
          markers: {
            size: 0,
            hover: {
              size: 5,
            },
          },
          xaxis: {
            labels: {
              style: {
                colors: '#b9b9c3',
                fontSize: '1rem',
              },
            },
            axisTicks: {
              show: false,
            },
            axisBorder: {
              show: false,
            },
            tickPlacement: 'on',
          },
          yaxis: {
            tickAmount: 5,
            labels: {
              style: {
                colors: '#b9b9c3',
                fontSize: '1rem',
              },
              formatter(val) {
                return val > 999 ? `${(val / 1000).toFixed(0)}k` : val
              },
            },
          },
          grid: {
            borderColor: '#e7eef7',
            padding: {
              top: -20,
              bottom: -10,
              left: 20,
            },
          },
          tooltip: {
            x: { show: false },
          },
        },
      },

      stats: {
        orders: 0,
        delivered_orders: 0,
        income: 0,
      },
      number:290,
      closeOnContentClick: true,
      transactions: {},
      loading: false,
      loading2: false,
      status: false,
      status2: false,
      loading3: false,
      categories_by_name:[]
    };
  },
  mounted(){
      this.getAuthData()
      this.fetchData()
      this.fetchData1()
      this.fetchData2()
      this.fetchData3()
      
  },
  computed:{
    ...mapState('auth', ['auth_data','auth_token']),
  },
  methods: {
    ...mapActions('auth', ['getAuthData']),
    getDashboardStats(){
      axios.get(this.dynamic_route('/dashboard/stats'), {
            headers:{
                authorization: `Bearer ${this.auth_token}`
            }
        }).then((res)=> {
          this.stats = res.data
        })
    },
    getDashboardChartData(){
        this.loading3 = true
      axios.get(this.dynamic_route('/dashboard/chart_data'), {
            headers:{
                authorization: `Bearer ${this.auth_token}`
            }
        }).then((res)=> {
        //   this.chartData = res.data
          this.loading3 = false
        })
    },
    getDashboardTableData(){
        this.loading2 = true
      axios.get(this.dynamic_route('/dashboard/table_data'), {
            headers:{
                authorization: `Bearer ${this.auth_token}`
            }
        }).then((res)=> {
          this.tableData = res.data
          this.loading2 = false
        })
    },
    getDashboardTransactions(){
      this.loading = true
      axios.get(this.dynamic_route('/dashboard/transactions'), {
            headers:{
                authorization: `Bearer ${this.auth_token}`
            }
        }).then((res)=> {
          this.transactions = res.data
          res.data.forEach(transaction => {
                if(transaction.user.mname) {
                    Object.assign(transaction.user, { fullname: transaction.user.lname + ' '  + transaction.user.fname + ' ' + transaction.user.mname})
                } else {
                    Object.assign(transaction.user, { fullname: transaction.user.lname + ' '  + transaction.user.fname })
                }
            });
            this.loading = false
        })
    },
    getInitials(fullname) {
        const allNames = fullname.trim().split(' ');
        const initials = allNames.reduce((acc, curr, index) => {
            if(index === 0 || index === allNames.length - 1){
                acc = `${acc}${curr.charAt(0).toUpperCase()}`;
            }
            return acc;
        }, '');
        return initials;
    },
    getRandomBadgeClass() {
    //   const {primary, success, info, danger} = this.appConfig.colors;
      const colors = ['badge-light-info', 'badge-light-primary', 'badge-light-danger', 
                    'badge-light-success', 'badge-light-warning', 'badge-light-secondary'];
      return colors[Math.floor(Math.random() * colors.length)]
    },
    fetchData(day = 7) {

      this.$api.post(this.dynamic_route("/dashboard/chart_data"), { days: day })
        .then(response => {
          this.revenueComparisonLine.chartOptions.xaxis.categories = response.data.data.dates
          this.revenueComparisonLine.series[0].data = response.data.data.amounts
          this.revenueComparisonLine.series[0].name = day == 7 ? 'Last 7 days' : (day == 14) ? ' Last 2 Weeks' : ' Last 1 Months'
          this.status = true;
          this.$forceUpdate()
        })
        .catch((err) => {
          if (err.response.status == 401 && err.response.data.message == "Unauthenticated.") {
            return this.logoutUser();

          }
        }).finally(()=>{
          this.status = true;

          NProgress.done()

        })

    },

    fetchData1() {

      this.$api.post(this.dynamic_route("/dashboard/income"))
        .then(response => {

          this.stats= response.data.data
        })
        .catch((err) => {
          if (err.response.status == 401 && err.response.data.message == "Unauthenticated.") {
            return this.logoutUser();

          }
        })
        .finally(() => {

          NProgress.done()

        })

    },
    fetchData2() {

      this.$api.post(this.dynamic_route("/dashboard/chart_data1"))
        .then(response => {

          this.revenueComparisonLine1.series[0].data = response.data.data
        }).catch((err) => {
          if (err.response.status == 401 && err.response.data.message == "Unauthenticated.") {
            return this.logoutUser();

          }
        }).finally(() => {
          this.status2 = true;

          NProgress.done()

        })

    },
    fetchData3() {

      this.$api.post(this.dynamic_route("/dashboard/categories_by_name"))
        .then(response => {

          this.categories_by_name = response.data.data
        })
        .catch((err) => {
          if (err.response.status == 401 && err.response.data.message == "Unauthenticated.") {
            return this.logoutUser();

          }
        })
        .finally(() => {
          this.status2 = true;

          NProgress.done()

        })

    }

  },
};
</script>

<style src="../Dashboard.scss" lang="scss" />
<style scoped>
  .card {
      border: none;
      margin-bottom: 1.5rem;
      padding: 0  !important;
      box-shadow: 0 4px 24px 0 rgb(34 41 47 / 10%);
  }
  .small-box {
    display: block;
    position: relative;
  }
  .small-box:hover {
    text-decoration: none;
  }
  .small-box>.inner {
    padding: 20px;
  }
  .small-box h3, .small-box p {
    z-index: 5;
  }
  .small-box h3 {
      font-weight: 600;
      padding: 0;
      white-space: nowrap;
      color: #5e5873;
      font-size: 25px;
      margin-bottom: 5px !important;
  }
  .small-box p {
    font-size: 0.93rem;
    font-weight: 500;
    color: #999999;
  }
  .small-box .icon {
    color: rgba(0,0,0,.15);
    z-index: 0;
  }
  .small-box .icon>i.fa, 
  .small-box .icon>i.fab, 
  .small-box .icon>i.fad, 
  .small-box .icon>i.fal, 
  .small-box .icon>i.far, 
  .small-box .icon>i.fas, 
  .small-box .icon>i.ion {
    font-size: 70px;
    top: 20px;
  }
  .small-box .icon>i {
    position: absolute;
    right: 15px;
    top: 15px;  
    transition: transform .3s linear,-webkit-transform .3s linear;
  }
  .small-box>.small-box-footer {
    border-top: 1px solid #f7f7f7;
    display: block;
    padding: 3px 0;
    position: relative;
    text-align: center;
    text-decoration: none;
    z-index: 10;
  }
  th, tr {
      white-space: nowrap;
  }
  .requests-table th, .requests-table-two th {
    font-weight: 550 !important;
  }
  .requests-table td, .requests-table-two td {
    font-weight: 400 !important;
    font-size: 13px;
  }
  .tables-basic .widget {
    border: none;
    margin-bottom: 1.5rem;
    box-shadow: 0 4px 24px 0 rgb(34 41 47 / 10%);
    border-radius: 0.7rem !important;
    background-color: #ffffff !important;
}
.requests-table-two td {
    font-size: 14px;
    vertical-align: middle;
    padding-top: 1px !important;
    padding-bottom: 1px !important;
}
</style>
