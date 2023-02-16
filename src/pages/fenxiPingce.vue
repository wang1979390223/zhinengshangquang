<template>
  <div class="container">
    <span class="title" @click="goServiceWisdomDo">服务智办</span>
    <div class="content-top">
      <div class="content-top-m">
        <div @click="isShowTable(0)">
          <span style="font-size: 2rem; margin-right: 0.5rem; font-weight: 700">{{ this.review.normal
          }}</span><span>个</span>
        </div>
        <div @click="isShowTable(1)">
          <span style="font-size: 2rem; margin-right: 0.5rem; font-weight: 700">{{ this.review.outtimefour
          }}</span><span>件</span>
        </div>
        <div @click="isShowTable(2)">
          <span style="font-size: 2rem; margin-right: 0.5rem; font-weight: 700">{{ this.review.enddo
          }}</span><span>件</span>
        </div>
      </div>
      <div class="content-top-t">
        <span>正常</span><span>超时</span><span>办结</span>
      </div>
    </div>
    <div class="content-middle">
      <div class="left">
        <div class="barone"></div>
      </div>
    </div>
    <div v-if="mask" class="mask"></div>
    <div v-if="showzhengchangList" class="dialog-zhengchang">
      <div v-show="dialog" class="dialog">
        <div class="dialog-title">
          <span>正常列表</span>
          <i class="el-icon-close" @click="
            showzhengchangList = false;
            mask = false;
          "
          ></i>
        </div>

        <div class="dialog-table">
          <table cellspacing="0">
            <thead>
              <tr>
                <td>序号</td>
                <td>申请人</td>
                <td>部门类型</td>
                <td>事项名称</td>
                <td>申请时间</td>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in zhengchangList.records" :key="item.applyid"
                  @click="isShowDetail(item.applyid)"
              >
                <td>{{ (zhengchangList.current - 1) * 10 + index + 1 }}</td>
                <td>{{ item.name }}</td>
                <td>{{ item.affiliatedoffice }}</td>
                <td>{{ item.mattername }}</td>
                <td>{{ parseTime(item.applytime) }}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="dialog-pagination">
          <el-pagination :current-page="zhengchangmsg.page" :page-size="zhengchangmsg.limit"
                         layout="total, prev, pager, next, jumper" :total="zhengchangList.total" @current-change="handleZCCurrentChange"
          >
          </el-pagination>
        </div>
      </div>
      <div v-show="!dialog" class="dialogdetail">
        <span class="dialog-title">案件详情</span>
        <i class="el-icon-back" @click="dialog = true"></i>
        <i class="el-icon-close" @click="dialog = true"></i>
        <div class="dialog-content">
          <div class="step-progress">
            <div class="progress">
              <div class="progress-t">
                <span>已申请</span>
                <span>2020.08.01</span>
                <span>00:00:00</span>
                <span>吴魈</span>
                <span style="opacity: 0">申请：吴魈</span>
                <span style="opacity: 0">申请人：吴魈</span>
              </div>
              <div class="progress-m">
                <span>待受理</span>
                <span>2020.08.01</span>
                <span>00:00:00</span>
                <span>吴魈</span>
                <span>行政中心</span>
                <span style="opacity: 0">申请人：吴魈</span>
              </div>
              <div class="progress-b">
                <span>待审批</span>
                <span>2020.08.01</span>
                <span>00:00:00</span>
                <span>吴魈</span>
                <span>行政中心</span>
                <span style="opacity: 0">申请人：吴魈</span>
              </div>
              <div class="progress-b">
                <span>待处理</span>
                <span>2020.08.01</span>
                <span>00:00:00</span>
                <span>吴魈</span>
                <span>行政中心</span>
                <span style="opacity: 0">申请人：吴魈</span>
              </div>
              <div class="progress-b">
                <span>已处理</span>
                <span>2020.08.01</span>
                <span>00:00:00</span>
                <span>吴魈</span>
                <span>行政中心</span>
                <span style="opacity: 0">申请人：吴魈</span>
              </div>
              <div class="progress-b">
                <span>评价</span>
                <span>2020.08.01</span>
                <span>00:00:00</span>
                <span>吴魈</span>
                <span>行政中心</span>
                <span style="opacity: 0">申请人：吴魈</span>
              </div>
            </div>
            <div class="dialog-content-step">
              <el-steps direction="vertical" :active="1" finish-status="success">
                <el-step> </el-step>
                <el-step></el-step>
                <el-step></el-step>
                <el-step></el-step>
                <el-step></el-step>
                <el-step></el-step>
              </el-steps>
            </div>
          </div>
          <div class="dialog-content-t">
            <!-- <div class="" style="border-right: 1px solid red; ">基本信息
              <span
                style="height: 20px; display: flex; justify-content: space-around; width: 20px; background: #13ce66; margin-right: -10px; border-radius: 10px; border: 2px solid #13ce66; align-items: center; text-align: center;">√</span>
            </div> -->
            <span class="dialog-content-m-title">基本信息</span>
            <ul class="dialog-content-t-l">
              <li>
                <div>
                  <span class="dialog-content-span-left">案件名称:</span>
                  <span class="dialog-content-span-right">{{
                    itemDetail.caseName
                  }}</span>
                </div>
                <div>
                  <span class="dialog-content-span-left">立案号:</span>
                  <span class="dialog-content-span-right">{{
                    itemDetail.applyTime
                  }}</span>
                </div>
              </li>
              <li>
                <div>
                  <span class="dialog-content-span-left">申请时间:</span>
                  <span class="dialog-content-span-right">{{
                    parseTime(itemDetail.applyTime)
                  }}</span>
                </div>
                <div>
                  <span class="dialog-content-span-left">申请事项:</span>
                  <span class="dialog-content-span-right">{{
                    itemDetail.inquiries
                  }}</span>
                </div>
              </li>
              <li>
                <div>
                  <span class="dialog-content-span-left">律师:</span>
                  <span class="dialog-content-span-right">{{
                    itemDetail.name
                  }}</span>
                </div>
                <div>
                  <span class="dialog-content-span-left">律师事务所:</span>
                  <span class="dialog-content-span-right">{{
                    itemDetail.affiliatedOffice
                  }}</span>
                </div>
              </li>

              <li>
                <div>
                  <span class="dialog-content-span-left">原告姓名:</span>
                  <span class="dialog-content-span-right">{{
                    itemDetail.plaintiffName
                  }}</span>
                </div>
                <div>
                  <span class="dialog-content-span-left">被告姓名:</span>
                  <span class="dialog-content-span-right">{{
                    itemDetail.defendantName
                  }}</span>
                </div>
              </li>
              <li>
                <div>
                  <span class="dialog-content-span-left">原告证件号:</span>
                  <span class="dialog-content-span-right">{{
                    itemDetail.plaintiffEvidenceNum
                  }}</span>
                </div>
                <div>
                  <span class="dialog-content-span-left">被告证件号:</span>
                  <span class="dialog-content-span-right">{{
                    itemDetail.defendantEvidenceNum
                  }}</span>
                </div>
              </li>
              <li>
                <div>
                  <span class="dialog-content-span-left">原告律师1:</span>
                  <span class="dialog-content-span-right">{{
                    itemDetail.plaintiffNowlawyer1
                      ? itemDetail.plaintiffNowlawyer1
                      : "无"
                  }}</span>
                </div>
                <div>
                  <span class="dialog-content-span-left">被告律师1:</span>
                  <span class="dialog-content-span-right">{{
                    itemDetail.defendantNowlawyer1
                      ? itemDetail.defendantNowlawyer1
                      : "无"
                  }}</span>
                </div>
              </li>
              <li>
                <div>
                  <span class="dialog-content-span-left">原告律师2:</span>
                  <span class="dialog-content-span-right">{{
                    itemDetail.plaintiffNowlawyer2
                      ? itemDetail.plaintiffNowlawyer2
                      : "无"
                  }}</span>
                </div>
                <div>
                  <span class="dialog-content-span-left">被告律师2:</span>
                  <span class="dialog-content-span-right">{{
                    itemDetail.defendantNowlawyer2
                      ? itemDetail.defendantNowlawyer2
                      : "无"
                  }}</span>
                </div>
              </li>
              <li>
                <div>
                  <span class="dialog-content-span-left">有无调查令:</span>
                  <span class="dialog-content-span-right">{{
                    itemDetail.isSearchWarrant === 0 ? "无" : "有"
                  }}</span>
                </div>
                <div></div>
              </li>
            </ul>
          </div>
          <div class="dialog-content-m">
            <span class="dialog-content-m-title">完成状态</span>
            <ul class="dialog-content-t-l">
              <li>
                <div>
                  <span class="dialog-content-span-left">处理状态:</span>
                  <span class="dialog-content-span-right">
                    {{
                      itemDetail.handleState === 0
                        ? "正在审核"
                        : itemDetail.handleState === 1
                          ? "正在处理"
                          : itemDetail.handleState === 2
                            ? "已处理"
                            : itemDetail.handleState === 4
                              ? "驳回"
                              : "未处理"
                    }}</span>
                </div>
                <div>
                  <span class="dialog-content-span-left">处理时间:</span>
                  <span class="dialog-content-span-right">{{
                    itemDetail.handleTime ? parseTime(itemDetail.handleTime) : "无"
                  }}</span>
                </div>
              </li>
              <li>
                <div>
                  <span class="dialog-content-span-left">处理人:</span>
                  <span class="dialog-content-span-right">
                    {{
                      itemDetail.handlePerson ? itemDetail.handlePerson : "无"
                    }}</span>
                </div>
                <div>
                  <span class="dialog-content-span-left">处理部门:</span>
                  <span class="dialog-content-span-right">{{
                    itemDetail.handleDepartment
                      ? itemDetail.handleDepartment
                      : "无"
                  }}</span>
                </div>
              </li>
            </ul>
          </div>
          <div class="dialog-content-b">
            <span class="dialog-content-m-title">评价</span>
            <ul class="dialog-content-t-l">
              <li>
                <div>
                  <span class="dialog-content-span-left">评价状态:</span>
                  <span class="dialog-content-span-right">{{
                    itemDetail.eval_type === 1
                      ? "不满意"
                      : itemDetail.eval_type === 2
                        ? "满意"
                        : itemDetail.eval_type === 3
                          ? "非常满意"
                          : "未评价"
                  }}</span>
                </div>
                <div>
                  <span class="dialog-content-span-left">处理时间:</span>
                  <span class="dialog-content-span-right">{{
                    itemDetail.createtime ? parseTime(itemDetail.createtime) : "无"
                  }}</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div v-if="showchaoshiList" class="dialog-chaoshi">
      <div v-show="dialog" class="dialog">
        <div class="dialog-title">
          <span>超时列表</span>
          <i class="el-icon-close" @click="
            showchaoshiList = false;
            mask = false;
          "
          ></i>
        </div>

        <div class="dialog-table">
          <table cellspacing="0">
            <thead>
              <tr>
                <td>序号</td>
                <td>姓名</td>
                <td>类型</td>
                <td>超时部门</td>
                <td>超时日期</td>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in chaoshiList.records" :key="item.applyid" @click="isShowDetail(item.applyid)">
                <td>{{ (chaoshiList.current - 1) * 10 + index + 1 }}</td>
                <td>{{ item.name }}</td>
                <td>{{ item.mattername }}</td>
                <td>{{ item.affiliatedoffice }}</td>
                <td>{{ parseTime(item.applytime) }}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="dialog-pagination">
          <el-pagination :current-page="chaoshimsg.page" :page-size="chaoshimsg.limit"
                         layout="total, prev, pager, next, jumper" :total="chaoshiList.total" @current-change="handleCSCurrentChange"
          >
          </el-pagination>
        </div>
      </div>
      <div v-show="!dialog" class="dialogdetail">
        <span class="dialog-title">案件详情</span>
        <i class="el-icon-back" @click="dialog = true"></i>
        <i class="el-icon-close" @click="dialog = true"></i>
        <div class="dialog-content">
          <div class="step-progress">
            <div class="progress">
              <div class="progress-t">
                <span>已申请</span>
                <span>2020.08.01</span>
                <span>00:00:00</span>
                <span>吴魈</span>
                <span style="opacity: 0">申请：吴魈</span>
                <span style="opacity: 0">申请人：吴魈</span>
              </div>
              <div class="progress-m">
                <span>待受理</span>
                <span>2020.08.01</span>
                <span>00:00:00</span>
                <span>吴魈</span>
                <span>行政中心</span>
                <span style="opacity: 0">申请人：吴魈</span>
              </div>
              <div class="progress-b">
                <span>待审批</span>
                <span>2020.08.01</span>
                <span>00:00:00</span>
                <span>吴魈</span>
                <span>行政中心</span>
                <span style="opacity: 0">申请人：吴魈</span>
              </div>
              <div class="progress-b">
                <span>待处理</span>
                <span>2020.08.01</span>
                <span>00:00:00</span>
                <span>吴魈</span>
                <span>行政中心</span>
                <span style="opacity: 0">申请人：吴魈</span>
              </div>
              <div class="progress-b">
                <span>已处理</span>
                <span>2020.08.01</span>
                <span>00:00:00</span>
                <span>吴魈</span>
                <span>行政中心</span>
                <span style="opacity: 0">申请人：吴魈</span>
              </div>
              <div class="progress-b">
                <span>评价</span>
                <span>2020.08.01</span>
                <span>00:00:00</span>
                <span>吴魈</span>
                <span>行政中心</span>
                <span style="opacity: 0">申请人：吴魈</span>
              </div>
            </div>
            <div class="dialog-content-step">
              <el-steps direction="vertical" :active="1" finish-status="success">
                <el-step> </el-step>
                <el-step></el-step>
                <el-step></el-step>
                <el-step></el-step>
                <el-step></el-step>
                <el-step></el-step>
              </el-steps>
            </div>
          </div>
          <div class="dialog-content-t">
            <!-- <div class="" style="border-right: 1px solid red; ">基本信息
              <span
                style="height: 20px; display: flex; justify-content: space-around; width: 20px; background: #13ce66; margin-right: -10px; border-radius: 10px; border: 2px solid #13ce66; align-items: center; text-align: center;">√</span>
            </div> -->
            <span class="dialog-content-m-title">基本信息</span>
            <ul class="dialog-content-t-l">
              <li>
                <div>
                  <span class="dialog-content-span-left">案件名称:</span>
                  <span class="dialog-content-span-right">{{
                    itemDetail.caseName
                  }}</span>
                </div>
                <div>
                  <span class="dialog-content-span-left">立案号:</span>
                  <span class="dialog-content-span-right">{{
                    itemDetail.applyTime
                  }}</span>
                </div>
              </li>
              <li>
                <div>
                  <span class="dialog-content-span-left">申请时间:</span>
                  <span class="dialog-content-span-right">{{
                    parseTime(itemDetail.applyTime)
                  }}</span>
                </div>
                <div>
                  <span class="dialog-content-span-left">申请事项:</span>
                  <span class="dialog-content-span-right">{{
                    itemDetail.inquiries
                  }}</span>
                </div>
              </li>
              <li>
                <div>
                  <span class="dialog-content-span-left">律师:</span>
                  <span class="dialog-content-span-right">{{
                    itemDetail.name
                  }}</span>
                </div>
                <div>
                  <span class="dialog-content-span-left">律师事务所:</span>
                  <span class="dialog-content-span-right">{{
                    itemDetail.affiliatedOffice
                  }}</span>
                </div>
              </li>

              <li>
                <div>
                  <span class="dialog-content-span-left">原告姓名:</span>
                  <span class="dialog-content-span-right">{{
                    itemDetail.plaintiffName
                  }}</span>
                </div>
                <div>
                  <span class="dialog-content-span-left">被告姓名:</span>
                  <span class="dialog-content-span-right">{{
                    itemDetail.defendantName
                  }}</span>
                </div>
              </li>
              <li>
                <div>
                  <span class="dialog-content-span-left">原告证件号:</span>
                  <span class="dialog-content-span-right">{{
                    itemDetail.plaintiffEvidenceNum
                  }}</span>
                </div>
                <div>
                  <span class="dialog-content-span-left">被告证件号:</span>
                  <span class="dialog-content-span-right">{{
                    itemDetail.defendantEvidenceNum
                  }}</span>
                </div>
              </li>
              <li>
                <div>
                  <span class="dialog-content-span-left">原告律师1:</span>
                  <span class="dialog-content-span-right">{{
                    itemDetail.plaintiffNowlawyer1
                      ? itemDetail.plaintiffNowlawyer1
                      : "无"
                  }}</span>
                </div>
                <div>
                  <span class="dialog-content-span-left">被告律师1:</span>
                  <span class="dialog-content-span-right">{{
                    itemDetail.defendantNowlawyer1
                      ? itemDetail.defendantNowlawyer1
                      : "无"
                  }}</span>
                </div>
              </li>
              <li>
                <div>
                  <span class="dialog-content-span-left">原告律师2:</span>
                  <span class="dialog-content-span-right">{{
                    itemDetail.plaintiffNowlawyer2
                      ? itemDetail.plaintiffNowlawyer2
                      : "无"
                  }}</span>
                </div>
                <div>
                  <span class="dialog-content-span-left">被告律师2:</span>
                  <span class="dialog-content-span-right">{{
                    itemDetail.defendantNowlawyer2
                      ? itemDetail.defendantNowlawyer2
                      : "无"
                  }}</span>
                </div>
              </li>
              <li>
                <div>
                  <span class="dialog-content-span-left">有无调查令:</span>
                  <span class="dialog-content-span-right">{{
                    itemDetail.isSearchWarrant === 0 ? "无" : "有"
                  }}</span>
                </div>
                <div></div>
              </li>
            </ul>
          </div>
          <div class="dialog-content-m">
            <span class="dialog-content-m-title">完成状态</span>
            <ul class="dialog-content-t-l">
              <li>
                <div>
                  <span class="dialog-content-span-left">处理状态:</span>
                  <span class="dialog-content-span-right">
                    {{
                      itemDetail.handleState === 0
                        ? "正在审核"
                        : itemDetail.handleState === 1
                          ? "正在处理"
                          : itemDetail.handleState === 2
                            ? "已处理"
                            : itemDetail.handleState === 4
                              ? "驳回"
                              : "未处理"
                    }}</span>
                </div>
                <div>
                  <span class="dialog-content-span-left">处理时间:</span>
                  <span class="dialog-content-span-right">{{
                    itemDetail.handleTime ? parseTime(itemDetail.handleTime) : "无"
                  }}</span>
                </div>
              </li>
              <li>
                <div>
                  <span class="dialog-content-span-left">处理人:</span>
                  <span class="dialog-content-span-right">
                    {{
                      itemDetail.handlePerson ? itemDetail.handlePerson : "无"
                    }}</span>
                </div>
                <div>
                  <span class="dialog-content-span-left">处理部门:</span>
                  <span class="dialog-content-span-right">{{
                    itemDetail.handleDepartment
                      ? itemDetail.handleDepartment
                      : "无"
                  }}</span>
                </div>
              </li>
            </ul>
          </div>
          <div class="dialog-content-b">
            <span class="dialog-content-m-title">评价</span>
            <ul class="dialog-content-t-l">
              <li>
                <div>
                  <span class="dialog-content-span-left">评价状态:</span>
                  <span class="dialog-content-span-right">{{
                    itemDetail.eval_type === 1
                      ? "不满意"
                      : itemDetail.eval_type === 2
                        ? "满意"
                        : itemDetail.eval_type === 3
                          ? "非常满意"
                          : "未评价"
                  }}</span>
                </div>
                <div>
                  <span class="dialog-content-span-left">处理时间:</span>
                  <span class="dialog-content-span-right">{{
                    itemDetail.createtime ? parseTime(itemDetail.createtime) : "无"
                  }}</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div v-if="showbanjieList" class="dialog-banjie">
      <div v-show="dialog" class="dialog">
        <div class="dialog-title">
          <span>办结列表</span>
          <i class="el-icon-close" @click="
            showbanjieList = false;
            mask = false;
          "
          ></i>
        </div>

        <div class="dialog-table">
          <table cellspacing="0">
            <thead>
              <tr>
                <td>序号</td>
                <td>姓名</td>
                <td>类型</td>
                <td>办结部门</td>
                <td>办结日期</td>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in banjieList.records" :key="item.applyid" @click="isShowDetail(item.applyid)">
                <td>{{ (banjieList.current - 1) * 10 + index + 1 }}</td>
                <td>{{ item.name }}</td>
                <td>{{ item.mattername }}</td>
                <td>{{ item.affiliatedoffice }}</td>
                <td>{{ parseTime(item.applytime) }}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="dialog-pagination">
          <el-pagination :current-page="banjiemsg.page" :page-size="banjiemsg.limit"
                         layout="total, prev, pager, next, jumper" :total="banjieList.total" @current-change="handleBJCurrentChange"
          >
          </el-pagination>
        </div>
      </div>
      <div v-show="!dialog" class="dialogdetail">
        <span class="dialog-title">案件详情</span>
        <i class="el-icon-back" @click="dialog = true"></i>
        <i class="el-icon-close" @click="dialog = true"></i>
        <div class="dialog-content">
          <div class="step-progress">
            <div class="progress">
              <div class="progress-t">
                <span>已申请</span>
                <span>2020.08.01</span>
                <span>00:00:00</span>
                <span>吴魈</span>
                <span style="opacity: 0">申请：吴魈</span>
                <span style="opacity: 0">申请人：吴魈</span>
              </div>
              <div class="progress-m">
                <span>待受理</span>
                <span>2020.08.01</span>
                <span>00:00:00</span>
                <span>吴魈</span>
                <span>行政中心</span>
                <span style="opacity: 0">申请人：吴魈</span>
              </div>
              <div class="progress-b">
                <span>待审批</span>
                <span>2020.08.01</span>
                <span>00:00:00</span>
                <span>吴魈</span>
                <span>行政中心</span>
                <span style="opacity: 0">申请人：吴魈</span>
              </div>
              <div class="progress-b">
                <span>待处理</span>
                <span>2020.08.01</span>
                <span>00:00:00</span>
                <span>吴魈</span>
                <span>行政中心</span>
                <span style="opacity: 0">申请人：吴魈</span>
              </div>
              <div class="progress-b">
                <span>已处理</span>
                <span>2020.08.01</span>
                <span>00:00:00</span>
                <span>吴魈</span>
                <span>行政中心</span>
                <span style="opacity: 0">申请人：吴魈</span>
              </div>
              <div class="progress-b">
                <span>评价</span>
                <span>2020.08.01</span>
                <span>00:00:00</span>
                <span>吴魈</span>
                <span>行政中心</span>
                <span style="opacity: 0">申请人：吴魈</span>
              </div>
            </div>
            <div class="dialog-content-step">
              <el-steps direction="vertical" :active="1" finish-status="success">
                <el-step> </el-step>
                <el-step></el-step>
                <el-step></el-step>
                <el-step></el-step>
                <el-step></el-step>
                <el-step></el-step>
              </el-steps>
            </div>
          </div>
          <div class="dialog-content-t">
            <!-- <div class="" style="border-right: 1px solid red; ">基本信息
              <span
                style="height: 20px; display: flex; justify-content: space-around; width: 20px; background: #13ce66; margin-right: -10px; border-radius: 10px; border: 2px solid #13ce66; align-items: center; text-align: center;">√</span>
            </div> -->
            <span class="dialog-content-m-title">基本信息</span>
            <ul class="dialog-content-t-l">
              <li>
                <div>
                  <span class="dialog-content-span-left">案件名称:</span>
                  <span class="dialog-content-span-right">{{
                    itemDetail.caseName
                  }}</span>
                </div>
                <div>
                  <span class="dialog-content-span-left">立案号:</span>
                  <span class="dialog-content-span-right">{{
                    itemDetail.applyTime
                  }}</span>
                </div>
              </li>
              <li>
                <div>
                  <span class="dialog-content-span-left">申请时间:</span>
                  <span class="dialog-content-span-right">{{
                    parseTime(itemDetail.applyTime)
                  }}</span>
                </div>
                <div>
                  <span class="dialog-content-span-left">申请事项:</span>
                  <span class="dialog-content-span-right">{{
                    itemDetail.inquiries
                  }}</span>
                </div>
              </li>
              <li>
                <div>
                  <span class="dialog-content-span-left">律师:</span>
                  <span class="dialog-content-span-right">{{
                    itemDetail.name
                  }}</span>
                </div>
                <div>
                  <span class="dialog-content-span-left">律师事务所:</span>
                  <span class="dialog-content-span-right">{{
                    itemDetail.affiliatedOffice
                  }}</span>
                </div>
              </li>

              <li>
                <div>
                  <span class="dialog-content-span-left">原告姓名:</span>
                  <span class="dialog-content-span-right">{{
                    itemDetail.plaintiffName
                  }}</span>
                </div>
                <div>
                  <span class="dialog-content-span-left">被告姓名:</span>
                  <span class="dialog-content-span-right">{{
                    itemDetail.defendantName
                  }}</span>
                </div>
              </li>
              <li>
                <div>
                  <span class="dialog-content-span-left">原告证件号:</span>
                  <span class="dialog-content-span-right">{{
                    itemDetail.plaintiffEvidenceNum
                  }}</span>
                </div>
                <div>
                  <span class="dialog-content-span-left">被告证件号:</span>
                  <span class="dialog-content-span-right">{{
                    itemDetail.defendantEvidenceNum
                  }}</span>
                </div>
              </li>
              <li>
                <div>
                  <span class="dialog-content-span-left">原告律师1:</span>
                  <span class="dialog-content-span-right">{{
                    itemDetail.plaintiffNowlawyer1
                      ? itemDetail.plaintiffNowlawyer1
                      : "无"
                  }}</span>
                </div>
                <div>
                  <span class="dialog-content-span-left">被告律师1:</span>
                  <span class="dialog-content-span-right">{{
                    itemDetail.defendantNowlawyer1
                      ? itemDetail.defendantNowlawyer1
                      : "无"
                  }}</span>
                </div>
              </li>
              <li>
                <div>
                  <span class="dialog-content-span-left">原告律师2:</span>
                  <span class="dialog-content-span-right">{{
                    itemDetail.plaintiffNowlawyer2
                      ? itemDetail.plaintiffNowlawyer2
                      : "无"
                  }}</span>
                </div>
                <div>
                  <span class="dialog-content-span-left">被告律师2:</span>
                  <span class="dialog-content-span-right">{{
                    itemDetail.defendantNowlawyer2
                      ? itemDetail.defendantNowlawyer2
                      : "无"
                  }}</span>
                </div>
              </li>
              <li>
                <div>
                  <span class="dialog-content-span-left">有无调查令:</span>
                  <span class="dialog-content-span-right">{{
                    itemDetail.isSearchWarrant === 0 ? "无" : "有"
                  }}</span>
                </div>
                <div></div>
              </li>
            </ul>
          </div>
          <div class="dialog-content-m">
            <span class="dialog-content-m-title">完成状态</span>
            <ul class="dialog-content-t-l">
              <li>
                <div>
                  <span class="dialog-content-span-left">处理状态:</span>
                  <span class="dialog-content-span-right">
                    {{
                      itemDetail.handleState === 0
                        ? "正在审核"
                        : itemDetail.handleState === 1
                          ? "正在处理"
                          : itemDetail.handleState === 2
                            ? "已处理"
                            : itemDetail.handleState === 4
                              ? "驳回"
                              : "未处理"
                    }}</span>
                </div>
                <div>
                  <span class="dialog-content-span-left">处理时间:</span>
                  <span class="dialog-content-span-right">{{
                    itemDetail.handleTime ? parseTime(itemDetail.handleTime) : "无"
                  }}</span>
                </div>
              </li>
              <li>
                <div>
                  <span class="dialog-content-span-left">处理人:</span>
                  <span class="dialog-content-span-right">
                    {{
                      itemDetail.handlePerson ? itemDetail.handlePerson : "无"
                    }}</span>
                </div>
                <div>
                  <span class="dialog-content-span-left">处理部门:</span>
                  <span class="dialog-content-span-right">{{
                    itemDetail.handleDepartment
                      ? itemDetail.handleDepartment
                      : "无"
                  }}</span>
                </div>
              </li>
            </ul>
          </div>
          <div class="dialog-content-b">
            <span class="dialog-content-m-title">评价</span>
            <ul class="dialog-content-t-l">
              <li>
                <div>
                  <span class="dialog-content-span-left">评价状态:</span>
                  <span class="dialog-content-span-right">{{
                    itemDetail.eval_type === 1
                      ? "不满意"
                      : itemDetail.eval_type === 2
                        ? "满意"
                        : itemDetail.eval_type === 3
                          ? "非常满意"
                          : "未评价"
                  }}</span>
                </div>
                <div>
                  <span class="dialog-content-span-left">处理时间:</span>
                  <span class="dialog-content-span-right">{{
                    itemDetail.createtime ? parseTime(itemDetail.createtime) : "无"
                  }}</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  getScreenData,
  getOutTimeList,
  getServiceEndList,
  getNormalList,
  getApplyOne
} from '@/api/newdaping/index';
import { getPie3D, getParametricEquation } from '../charts/charts'; // 工具类js，页面路径自己修改
import 'echarts-gl';
export default {
  data() {
    return {
      review: {},
      getValue: 15,
      optionData: [
        {
          name: '区人社局',
          value: 20
          // itemStyle: {color: '#fff'}
        },
        {
          name: '公安分局',
          value: 20
        },
        {
          name: '卫建委',
          value: 70
        },
        {
          name: '民政局',
          value: 10
        },
        {
          name: '市场监管局',
          value: 20
        },
        {
          name: '自然规划',
          value: 55
        },
        {
          name: '公安交警',
          value: 50
        },
        {
          name: '法院',
          value: 20
        },
        {
          name: '版权局',
          value: 30
        }
      ],
      statusChart: null,
      option: {},
      mask: false,
      showchaoshiList: false,
      showzhengchangList: false,
      showbanjieList: false,
      zhengchangmsg: {
        page: 1,
        limit: 10
      },
      chaoshimsg: {
        page: 1,
        limit: 10
      },
      banjiemsg: {
        page: 1,
        limit: 10
      },
      zhengchangList: [],
      chaoshiList: [],
      banjieList: [],
      dialog: true,
      itemDetail: {}
    };
  },
  created() { },
  mounted() {
    this.getList();
    this.initChart();
  },
  methods: {
    async getList() {
      const { data } = await getScreenData(this.getValue);
      var ccryRSA = this.Encrypt.decrypt(data);
      var cccryRSA = JSON.parse(decodeURIComponent(ccryRSA));
      this.review = cccryRSA;
    },
    async getzhengchangList() {
      const { data } = await getNormalList(this.chaoshimsg);
      var ccryRSA = this.Encrypt.decrypt(data);
      var cccryRSA = JSON.parse(decodeURIComponent(ccryRSA));
      this.zhengchangList = cccryRSA;
      console.log(cccryRSA);
    },
    async getchaoshiList() {
      const { data } = await getOutTimeList(this.chaoshimsg);
      var ccryRSA = this.Encrypt.decrypt(data);
      var cccryRSA = JSON.parse(decodeURIComponent(ccryRSA));
      this.chaoshiList = cccryRSA;
      console.log(cccryRSA);
    },
    async getbanjieList() {
      const { data } = await getServiceEndList(this.banjiemsg);
      var ccryRSA = this.Encrypt.decrypt(data);
      var cccryRSA = JSON.parse(decodeURIComponent(ccryRSA));
      this.banjieList = cccryRSA;
      console.log(cccryRSA);
    },

    // 图表初始化
    initChart() {
      // 构建3d饼状图
      let myChart = this.$echarts.init(document.querySelector('.barone'));
      // 传入数据生成 option
      this.option = this.getPie3D(this.optionData, 0.8);
      myChart.setOption(this.option);
      // 是否需要label指引线，如果要就添加一个透明的2d饼状图并调整角度使得labelLine和3d的饼状图对齐，并再次setOption
      this.option.series.push({
        name: 'pie2d',
        type: 'pie',
        left: 25,
        label: {
          opacity: 1,
          fontSize: 14,
          lineHeight: 20,
          color: '#fff'
          // fontWeight: 700
        },
        labelLine: {
          length: 10,
          length2: 10
        },
        startAngle: -40, // 起始角度，支持范围[0, 360]。
        clockwise: false, // 饼图的扇区是否是顺时针排布。上述这两项配置主要是为了对齐3d的样式
        radius: ['30%', '65%'],
        center: ['50%', '50%'],
        data: this.optionData,
        itemStyle: {
          opacity: 0
        }
      });
      myChart.setOption(this.option);
      this.bindListen(myChart);
    },

    getPie3D(pieData, internalDiameterRatio) {
      // internalDiameterRatio:透明的空心占比
      let that = this;
      let series = [];
      let sumValue = 0;
      let startValue = 0;
      let endValue = 0;
      let legendData = [];
      let legendBfb = [];
      let k = 1 - internalDiameterRatio;
      pieData.sort((a, b) => {
        return b.value - a.value;
      });
      // 为每一个饼图数据，生成一个 series-surface 配置
      for (let i = 0; i < pieData.length; i++) {
        sumValue += pieData[i].value;
        let seriesItem = {
          name:
            typeof pieData[i].name === 'undefined'
              ? `series${i}`
              : pieData[i].name,
          type: 'surface',
          parametric: true,
          wireframe: {
            show: false
          },
          pieData: pieData[i],
          pieStatus: {
            selected: false,
            hovered: false,
            k: k
          },
          center: ['10%', '50%']
        };

        if (typeof pieData[i].itemStyle != 'undefined') {
          let itemStyle = {};
          typeof pieData[i].itemStyle.color != 'undefined'
            ? (itemStyle.color = pieData[i].itemStyle.color)
            : null;
          typeof pieData[i].itemStyle.opacity != 'undefined'
            ? (itemStyle.opacity = pieData[i].itemStyle.opacity)
            : null;
          seriesItem.itemStyle = itemStyle;
        }
        series.push(seriesItem);
      }

      // 使用上一次遍历时，计算出的数据和 sumValue，调用 getParametricEquation 函数，
      // 向每个 series-surface 传入不同的参数方程 series-surface.parametricEquation，也就是实现每一个扇形。
      legendData = [];
      legendBfb = [];
      for (let i = 0; i < series.length; i++) {
        endValue = startValue + series[i].pieData.value;
        series[i].pieData.startRatio = startValue / sumValue;
        series[i].pieData.endRatio = endValue / sumValue;
        series[i].parametricEquation = this.getParametricEquation(
          series[i].pieData.startRatio,
          series[i].pieData.endRatio,
          false,
          false,
          k,
          series[i].pieData.value
        );
        startValue = endValue;
        let bfb = that.fomatFloat(series[i].pieData.value / sumValue, 4);
        legendData.push({
          name: series[i].name,
          value: bfb
        });
        legendBfb.push({
          name: series[i].name,
          value: bfb
        });
      }
      let boxHeight = this.getHeight3D(series, 26); // 通过传参设定3d饼/环的高度，26代表26px
      // 准备待返回的配置项，把准备好的 legendData、series 传入。
      let option = {
        legend: {
          data: legendData,
          orient: 'horizontal',
          left: 10,
          top: 10,
          itemGap: 10,
          textStyle: {
            color: '#A1E2FF'
          },
          show: false,
          icon: 'circle',
          formatter: function(param) {
            let item = legendBfb.filter(item => item.name == param)[0];
            let bfs = that.fomatFloat(item.value * 100, 2) + '%';
            return `${item.name}  ${bfs}`;
          }
        },
        labelLine: {
          show: true,
          lineStyle: {
            color: '#7BC0CB'
          }
        },
        label: {
          show: true,
          position: 'outside',
          formatter: '{b} \n{a|{c} {d}%}',
          rich: {
            a: {
              color: '#26ddd5'
            }
          }
        },
        tooltip: {
          formatter: params => {
            if (
              params.seriesName !== 'mouseoutSeries' &&
              params.seriesName !== 'pie2d'
            ) {
              let bfb = (
                (option.series[params.seriesIndex].pieData.endRatio -
                  option.series[params.seriesIndex].pieData.startRatio) *
                100
              ).toFixed(2);
              return (
                `${params.seriesName}<br/>` +
                `<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:${params.color};"></span>` +
                `${bfb}%`
              );
            }
          }
        },
        xAxis3D: {
          min: -1,
          max: 1
        },
        yAxis3D: {
          min: -1,
          max: 1
        },
        zAxis3D: {
          min: -1,
          max: 1
        },
        grid3D: {
          show: false,
          left: 10,
          boxHeight: boxHeight, // 圆环的高度
          viewControl: {
            // 3d效果可以放大、旋转等，请自己去查看官方配置
            alpha: 40, // 角度
            distance: 230, // 调整视角到主体的距离，类似调整zoom
            rotateSensitivity: 0, // 设置为0无法旋转
            zoomSensitivity: 0, // 设置为0无法缩放
            panSensitivity: 0, // 设置为0无法平移
            autoRotate: false // 自动旋转
          }
        },
        axisLabel: {
          show: true,
          formatter: ['{b|{b}} {d|{d}%}'].join('\n') // 用\n来换行
          // rich: {
          //   b: {
          //     color: '#fff',
          //     lineHeight: 35,
          //     align: 'left',
          //     fontSize: '0.6rem'

          //   },
          //   c: {
          //     fontSize: '1rem',
          //     color: '#fff',
          //     textShadowColor: '#1c90a6',
          //     textShadowOffsetX: 0,
          //     textShadowOffsetY: 2,
          //     textShadowBlur: 5
          //   },
          //   d: {
          //     color: '#F9583C',
          //     align: 'left',
          //     fontSize: '0.6rem'
          //   }
          // }
        },
        series: series
      };
      return option;
    },

    // 获取3d丙图的最高扇区的高度
    getHeight3D(series, height) {
      series.sort((a, b) => {
        return b.pieData.value - a.pieData.value;
      });
      return (height * 25) / series[0].pieData.value;
    },

    // 生成扇形的曲面参数方程，用于 series-surface.parametricEquation
    getParametricEquation(startRatio, endRatio, isSelected, isHovered, k, h) {
      // 计算
      let midRatio = (startRatio + endRatio) / 2;
      let startRadian = startRatio * Math.PI * 2;
      let endRadian = endRatio * Math.PI * 2;
      let midRadian = midRatio * Math.PI * 2;
      // 如果只有一个扇形，则不实现选中效果。
      if (startRatio === 0 && endRatio === 1) {
        isSelected = false;
      }
      // 通过扇形内径/外径的值，换算出辅助参数 k（默认值 1/3）
      k = typeof k !== 'undefined' ? k : 1 / 3;
      // 计算选中效果分别在 x 轴、y 轴方向上的位移（未选中，则位移均为 0）
      let offsetX = isSelected ? Math.cos(midRadian) * 0.1 : 0;
      let offsetY = isSelected ? Math.sin(midRadian) * 0.1 : 0;
      // 计算高亮效果的放大比例（未高亮，则比例为 1）
      let hoverRate = isHovered ? 1.05 : 1;
      // 返回曲面参数方程
      return {
        u: {
          min: -Math.PI,
          max: Math.PI * 3,
          step: Math.PI / 32
        },
        v: {
          min: 0,
          max: Math.PI * 2,
          step: Math.PI / 20
        },
        x: function(u, v) {
          if (u < startRadian) {
            return (
              offsetX +
              Math.cos(startRadian) * (1 + Math.cos(v) * k) * hoverRate
            );
          }
          if (u > endRadian) {
            return (
              offsetX + Math.cos(endRadian) * (1 + Math.cos(v) * k) * hoverRate
            );
          }
          return offsetX + Math.cos(u) * (1 + Math.cos(v) * k) * hoverRate;
        },
        y: function(u, v) {
          if (u < startRadian) {
            return (
              offsetY +
              Math.sin(startRadian) * (1 + Math.cos(v) * k) * hoverRate
            );
          }
          if (u > endRadian) {
            return (
              offsetY + Math.sin(endRadian) * (1 + Math.cos(v) * k) * hoverRate
            );
          }
          return offsetY + Math.sin(u) * (1 + Math.cos(v) * k) * hoverRate;
        },
        z: function(u, v) {
          if (u < -Math.PI * 0.5) {
            return Math.sin(u);
          }
          if (u > Math.PI * 2.5) {
            return Math.sin(u) * h * 0.1;
          }
          return Math.sin(v) > 0 ? 1 * h * 0.1 : -1;
        }
      };
    },

    fomatFloat(num, n) {
      var f = parseFloat(num);
      if (isNaN(f)) {
        return false;
      }
      f = Math.round(num * Math.pow(10, n)) / Math.pow(10, n); // n 幂
      var s = f.toString();
      var rs = s.indexOf('.');
      // 判定如果是整数，增加小数点再补0
      if (rs < 0) {
        rs = s.length;
        s += '.';
      }
      while (s.length <= rs + n) {
        s += '0';
      }
      return s;
    },

    bindListen(myChart) {
      // 监听鼠标事件，实现饼图选中效果（单选），近似实现高亮（放大）效果。
      let that = this;
      let selectedIndex = '';
      let hoveredIndex = '';
      // 监听点击事件，实现选中效果（单选）
      myChart.on('click', function(params) {
        // 从 option.series 中读取重新渲染扇形所需的参数，将是否选中取反。
        let isSelected =
          !that.option.series[params.seriesIndex].pieStatus.selected;
        let isHovered =
          that.option.series[params.seriesIndex].pieStatus.hovered;
        let k = that.option.series[params.seriesIndex].pieStatus.k;
        let startRatio =
          that.option.series[params.seriesIndex].pieData.startRatio;
        let endRatio = that.option.series[params.seriesIndex].pieData.endRatio;
        // 如果之前选中过其他扇形，将其取消选中（对 option 更新）
        if (selectedIndex !== '' && selectedIndex !== params.seriesIndex) {
          that.option.series[selectedIndex].parametricEquation =
            that.getParametricEquation(
              that.option.series[selectedIndex].pieData.startRatio,
              that.option.series[selectedIndex].pieData.endRatio,
              false,
              false,
              k,
              that.option.series[selectedIndex].pieData.value
            );
          that.option.series[selectedIndex].pieStatus.selected = false;
        }
        // 对当前点击的扇形，执行选中/取消选中操作（对 option 更新）
        that.option.series[params.seriesIndex].parametricEquation =
          that.getParametricEquation(
            startRatio,
            endRatio,
            isSelected,
            isHovered,
            k,
            that.option.series[params.seriesIndex].pieData.value
          );
        that.option.series[params.seriesIndex].pieStatus.selected = isSelected;
        // 如果本次是选中操作，记录上次选中的扇形对应的系列号 seriesIndex
        isSelected ? (selectedIndex = params.seriesIndex) : null;
        // 使用更新后的 option，渲染图表
        myChart.setOption(that.option);
      });
      // 监听 mouseover，近似实现高亮（放大）效果
      myChart.on('mouseover', function(params) {
        // 准备重新渲染扇形所需的参数
        let isSelected;
        let isHovered;
        let startRatio;
        let endRatio;
        let k;
        // 如果触发 mouseover 的扇形当前已高亮，则不做操作
        if (hoveredIndex === params.seriesIndex) {
          return;
          // 否则进行高亮及必要的取消高亮操作
        } else {
          // 如果当前有高亮的扇形，取消其高亮状态（对 option 更新）
          if (hoveredIndex !== '') {
            // 从 option.series 中读取重新渲染扇形所需的参数，将是否高亮设置为 false。
            isSelected = that.option.series[hoveredIndex].pieStatus.selected;
            isHovered = false;
            startRatio = that.option.series[hoveredIndex].pieData.startRatio;
            endRatio = that.option.series[hoveredIndex].pieData.endRatio;
            k = that.option.series[hoveredIndex].pieStatus.k;
            // 对当前点击的扇形，执行取消高亮操作（对 option 更新）
            that.option.series[hoveredIndex].parametricEquation =
              that.getParametricEquation(
                startRatio,
                endRatio,
                isSelected,
                isHovered,
                k,
                that.option.series[hoveredIndex].pieData.value
              );
            that.option.series[hoveredIndex].pieStatus.hovered = isHovered;
            // 将此前记录的上次选中的扇形对应的系列号 seriesIndex 清空
            hoveredIndex = '';
          }
          // 如果触发 mouseover 的扇形不是透明圆环，将其高亮（对 option 更新）
          if (
            params.seriesName !== 'mouseoutSeries' &&
            params.seriesName !== 'pie2d'
          ) {
            // 从 option.series 中读取重新渲染扇形所需的参数，将是否高亮设置为 true。
            isSelected =
              that.option.series[params.seriesIndex].pieStatus.selected;
            isHovered = true;
            startRatio =
              that.option.series[params.seriesIndex].pieData.startRatio;
            endRatio = that.option.series[params.seriesIndex].pieData.endRatio;
            k = that.option.series[params.seriesIndex].pieStatus.k;
            // 对当前点击的扇形，执行高亮操作（对 option 更新）
            that.option.series[params.seriesIndex].parametricEquation =
              that.getParametricEquation(
                startRatio,
                endRatio,
                isSelected,
                isHovered,
                k,
                that.option.series[params.seriesIndex].pieData.value + 5
              );
            that.option.series[params.seriesIndex].pieStatus.hovered =
              isHovered;
            // 记录上次高亮的扇形对应的系列号 seriesIndex
            hoveredIndex = params.seriesIndex;
          }
          // 使用更新后的 option，渲染图表
          myChart.setOption(that.option);
        }
      });
      // 修正取消高亮失败的 bug
      myChart.on('globalout', function() {
        // 准备重新渲染扇形所需的参数
        let isSelected;
        let isHovered;
        let startRatio;
        let endRatio;
        let k;
        if (hoveredIndex !== '') {
          // 从 option.series 中读取重新渲染扇形所需的参数，将是否高亮设置为 true。
          isSelected = that.option.series[hoveredIndex].pieStatus.selected;
          isHovered = false;
          k = that.option.series[hoveredIndex].pieStatus.k;
          startRatio = that.option.series[hoveredIndex].pieData.startRatio;
          endRatio = that.option.series[hoveredIndex].pieData.endRatio;
          // 对当前点击的扇形，执行取消高亮操作（对 option 更新）
          that.option.series[hoveredIndex].parametricEquation =
            that.getParametricEquation(
              startRatio,
              endRatio,
              isSelected,
              isHovered,
              k,
              that.option.series[hoveredIndex].pieData.value
            );
          that.option.series[hoveredIndex].pieStatus.hovered = isHovered;
          // 将此前记录的上次选中的扇形对应的系列号 seriesIndex 清空
          hoveredIndex = '';
        }
        // 使用更新后的 option，渲染图表
        myChart.setOption(that.option);
      });
    },
    goServiceWisdomDo() {
      this.$router
        .push({ path: '/visual/views/chunks/serviceWisdomDo/index' })
        .catch(err => err);
    },
    isShowTable(val) {
      this.mask = true;
      this.showchaoshiList = false;
      this.showzhengchangList = false;
      this.showbanjieList = false;
      if (val == 0) {
        this.showzhengchangList = true;
        this.getzhengchangList();
      } else if (val == 1) {
        this.showchaoshiList = true;
        this.getchaoshiList();
      } else if (val == 2) {
        this.showbanjieList = true;
        this.getbanjieList();
      }
    },
    handleZCCurrentChange(val) {
      this.zhengchangmsg.page = val;
      this.getzhengchangList();
    },
    handleCSCurrentChange(val) {
      this.chaoshimsg.page = val;
      this.getchaoshiList();
    },
    handleBJCurrentChange(val) {
      this.banjiemsg.page = val;
      this.getbanjieList();
    },
    async isShowDetail(applyID) {
      this.dialog = false;
      const { data } = await getApplyOne(applyID);
      var ccryRSA = this.Encrypt.decrypt(data);
      var cccryRSA = JSON.parse(decodeURIComponent(ccryRSA));
      this.itemDetail = cccryRSA;
      console.log(this.itemDetail);
    }
  }
};
</script>

<style lang='scss' scoped>
.container {
  position: relative;
  width: 24%;
  height: 50vh;
  background: url("../../../assets/images/visualimg/right2.png") no-repeat;
  background-size: 100% 100%;
  font-size: 0.8rem;

  .title {
    position: absolute;
    top: 4%;
    left: 81%;
    transform: translate(-50%, -50%);
    font-size: 1rem;
    font-weight: 700;
    background-image: -webkit-linear-gradient(left, #067af0, #0dffff, #067af0);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    &:hover {
      cursor: pointer;
    }
  }

  .content-top {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 10px 20px;
    position: absolute;
    top: 23%;
    left: 50%;
    transform: translate(-50%, -50%);

    .content-top-t,
    .content-top-m,
    .content-top-b {
      display: flex;
      justify-content: space-around;
      cursor: pointer;
    }

    .content-top-t {
      color: #fff;
    }

    .content-top-m {
      color: #26ddd5;
      margin-bottom: 5px;
    }
  }

  .content-middle {
    position: absolute;
    top: 65%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    display: flex;
    flex-wrap: nowrap;

    .left {
      width: 100%;

      .barone {
        width: 100%;
        height: 240px;
      }
    }
  }

  .mask {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100vh;
    background-color: pink;
    opacity: 0;
    z-index: 8;
  }

  // 弹窗
  .dialog-chaoshi,
  .dialog-zhengchang,
  .dialog-banjie {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 55%;
    min-width: 1055px;
    height: 65vh;
    min-height: 700px;
    border: 1px solid #065ca4;
    background: url("../../../assets/images/visualimg/bigBG.png") no-repeat;
    background-size: 100% 100%;
    color: #fff;
    z-index: 9;

    .dialog,
    .dialogdetail {
      width: 100%;
      height: 100%;
      position: relative;

      .dialog-title {
        display: flex;
        /* margin-top: 1rem; */
        margin-left: 1rem;
        font-size: 1.2rem;
        height: 8%;
        /* line-height: 1.2rem; */
        align-items: center;
        justify-content: space-between;
      }

      .el-icon-close {
        float: right;
        margin-right: 1rem;
        margin-top: 1rem;
        font-size: 1.5rem;
        cursor: pointer;
      }

      .dialog-table {
        height: 87%;

        table {
          width: 90%;
          margin: auto;
          text-align: center;

          thead {
            color: #b4b8b3;

            tr {
              font-size: 1rem;
              font-weight: 700;
            }
          }

          tbody {
            color: #969aa3;

            tr {
              font-size: 1rem;
              cursor: pointer;

              &:hover {
                color: #04c3b7;
              }

              &:nth-child(2n-1) {
                background: -webkit-linear-gradient(left, #0f288a, #1a1d5e);
              }
            }
          }

          tr {
            height: 2.7rem;
          }

          td {
            padding: 0;
          }
        }
      }

      .dialog-pagination {
        width: 100%;
        height: 5%;
        position: absolute;
        right: 0;
        bottom: 0;
        text-align: right;

        .el-pagination {

          ::v-deep.el-pagination__total,
          ::v-deep.el-pagination__jump {
            color: #04c3b7;
          }

          ::v-deep.btn-prev,
          ::v-deep.btn-next {
            background: none;
            color: #04c3b7;

            &:hover {
              color: #fff;
            }

            &:disabled {
              color: #04c3b7;
            }
          }

          ::v-deep.el-pager {
            li {
              background: none;
              color: #04c3b7;
            }

            .active {
              color: #fff;
            }
          }

          ::v-deep.el-input__inner {
            border: none;
            background: none;
            color: #fff;
          }
        }
      }
    }

    .dialogdetail {
      .dialog-title {
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        margin: 0;
        font-size: 1.2rem;
      }

      .el-icon-back {
        float: left;
        margin-left: 1rem;
        margin-top: 1rem;
        font-size: 1.5rem;
        cursor: pointer;
      }

      .dialog-content {
        position: absolute;
        top: 55%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 100%;
        height: 90%;
        display: flex;
        justify-content: space-between;
        overflow-y: scroll;

        &::-webkit-scrollbar {
          display: none;
        }

        .step-progress {
          height: 100%;
          width: 25%;
          display: flex;
          justify-content: center;
          overflow: scroll;

          &::-webkit-scrollbar {
            display: none;
          }

          .dialog-content-step {
            margin-top: 3px;
            height: 89%;

            .el-step {
              ::v-deep.el-step__head {
                color: #fff;

                .el-step__icon {
                  border: 2px solid #04c3b7;
                  box-shadow: 0 0 5px 2px #04c3b7;
                  background: #000;
                }
              }

              ::v-deep.el-step__main {
                .el-step__title {
                  width: 100%;
                }

                .el-step__description {
                  padding: 0;
                }
              }
            }
          }

          .progress {
            display: flex;
            flex-direction: column;
            margin-right: 3rem;

            .progress-t,
            .progress-m,
            .progress-b {
              flex: 1;
              display: flex;
              flex-direction: column;
              align-items: flex-end;

              span {
                display: block;
                font-size: 0.4rem;
                color: #999;

                &:nth-child(1) {
                  font-size: 1rem;
                  font-weight: 700;
                  color: #04c3b7;
                }

                // &:nth-child(2) {
                //   font-size: 0.4rem;
                //   color: #fff;
                // }
              }
            }

            .progress-t {
              top: 3%;
              left: 50%;
            }

            .progress-m {
              top: 50%;
              left: 50%;
            }

            .progress-b {
              top: 79%;
              left: 50%;
            }
          }
        }

        .dialog-content-t,
        .dialog-content-m,
        .dialog-content-b {
          background-color: rgba(15, 40, 138, 0.35);
          position: absolute;
          transform: translate(-50%, -50%);

          width: 72%;
          left: 61%;
          display: flex;
          flex-direction: column;
          justify-content: start;

          .dialog-content-m-title {
            height: 2.5rem;
            line-height: 2.5rem;
            font-weight: 700;
            font-size: 1.2rem;
            color: #b4b8b3;
            background: #0f1485;
            padding-left: 1.5rem;
          }

          .dialog-content-t-l {
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            width: 100%;
            margin: 0;
            padding: 0;
            // display: flex;
            // flex-direction: column;
            // justify-content: center;

            li {
              // height: 2rem;
              display: flex;
              align-items: center;
              list-style: none;
              font-size: 0.8rem;

              div {
                flex: 1;
                display: flex;
                align-items: center;

                .dialog-content-span-left {
                  width: 30%;
                  margin-right: 30px;
                  font-weight: 700;
                  font-size: 0.8rem;
                  color: #969aa3;
                  text-align: right;
                }

                .dialog-content-span-right {
                  width: 80%;
                  font-size: 0.8rem;
                  color: #969aa3;
                }
              }
            }
          }
        }

        .dialog-content-t {
          height: 45%;
          top: 22%;
        }

        .dialog-content-m {
          height: 27%;
          top: 60%;
        }

        .dialog-content-b {
          height: 22%;
          top: 87%;
        }
      }
    }
  }
}
</style>