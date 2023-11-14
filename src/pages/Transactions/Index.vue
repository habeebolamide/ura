<template>
    <v-app class="p-4">
        <h2 class="page-title mb-0">Transactions</h2>
        <b-row class="mt-4">
            <b-col>
                <Widget
                title=""
                customHeader
                >
                    <h5 class="d-inline-block">Manage  <span class='fw-semi-bold'>Transactions</span></h5>
                    <!-- <v-btn
                        depressed
                        color="primary"
                        class="float-right btn-lg custom-btn"
                        @click="linkPage"
                    >
                        <i class="mdi mdi-plus-circle"></i> New Product
                    </v-btn> -->
                    <VueElementLoading
                        :active="loading"
                        spinner="bar-fade-scale"
                        color="var(--primary)"
                        text="Loading.."
                        duration="0.6"
                    />
                    <div class="mt-3" >
                        <div class="card">
                            <div class="card-body">
                                <v-row class="bg-isnfo">
                                    <!-- <v-col
                                        cols="12"
                                        md="4"
                                    >
                                        <v-select
                                            v-model="filters.status"
                                            :items="['pending', 'processing', 'de']"
                                            label="Status"
                                            outlined
                                        ></v-select>
                                    </v-col> -->
                                    <v-col
                                        cols="12"
                                        
                                        md="6"
                                        >
                                        <v-text-field
                                            label="Email"
                                            v-model="filters.search"

                                            placeholder="Search By Email"
                                            outlined
                                        ></v-text-field>
                                    </v-col>
                                    <v-col
                                        cols="12"
                                        md="3"
                                        class="text-center pt-5"
                                        >
                                        
                                      <button type="button" @click="fetchData" class="btn-lg btn-block btn btn-outline-success">Search</button>
                                    </v-col>

                                </v-row>
                            </div>
                        </div>
                        
                        <div class="table-responsive mt-4">
                            <table class="table table-hover table-sm mb-0 requests-table">
                                <thead>
                                    <tr>
                                        <th class="hidden-sm-down">S/N</th>
                                        <th class="hidden-sm-down">Reference_no (Paystack)</th>
                                        <th class="hidden-sm-down">Reference_id</th>
                                        <th class="hidden-sm-down">Email</th>
                                        <th class="hidden-sm-down">Amount </th>
                                        <th class="hidden-sm-down">Status </th>
                                        <th class="hidden-sm-down">Date </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(trans, i) in allTrans.data" :key="i">
                                        <td>{{ i+1 }}</td>
                                        <td>{{ trans.reference_no }}</td>
                                        <td>{{ trans.reference_id }}</td>
                                        <td>{{ trans.email }}</td>
                                        <td>{{ trans.amount }}</td>
                                        <td>
                                            <span class="badge badge-pill"
                                                :class="trans.status == 'pending' ? 'badge-warning' : (trans.status == 'cancelled' ? 'badge-danger' : 'badge-success')">
                                                {{ trans.status }}
                                            </span>

                                        </td>
                                        <td> {{ new Date(trans.created_at).toUTCString() }}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    
                    <div class="col-md-12">
                        <laravelVuePagination :data="allTrans" @pagination-change-page="fetchData" />
                    </div>
                </Widget>
            </b-col>
        </b-row>
    </v-app>
</template>
<script>
import Widget from '@/components/Widget/Widget';

import axios from 'axios'
import VueElementLoading from 'vue-element-loading'
import laravelVuePagination from 'laravel-vue-pagination'
import { mapState,mapActions } from 'vuex';


export default {
    components:{VueElementLoading,laravelVuePagination},
    data(){
        return {
            status_id:0,
            del_id:0,
            dynamic_status:'',
            openConfirm:false,
            openConfirm2:false,
            dialog:false,
            properties: { data: [] },
            filters: {},
            loading: false,
            isDialogVisible: false,
            closeOnContentClick: true,
            allTrans:{}

        }
    },
    computed:{
        ...mapState('modules_data',['sub_categories', 'nested_sub_categories', 'product_disease'])
    },
    mounted() {
       this.getNestedSubCategories()
        this.fetchData();
    },
    methods: {
        ...mapActions('modules_data', ['getNestedSubCategories']),

        pass_current(data) {
            this.current = data
        },
        fetchData(page=1) {
            this.loading = true
            this.$api.post(this.dynamic_route(`/transactions/gettrans?page=${page}`), {filters: this.filters})
            .then((res) => {
                // return console.log(res.data);
                this.allTrans=res.data.data
            }).catch(err => {

            }).finally(() => {
                this.loading = false;
                NProgress.done()

            })
        },
    },
   
}
</script>
<style scoped>
   .modal-body {
       background: white !important;
   }
   .custom-btn {
  color: #ffffff;
  background-color: #ec570d !important;
  /* background-image: linear-gradient(135deg, #f27233 0%, #f27233 100%) !important; */
}
</style>