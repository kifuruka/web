<template>
  <div>
    <template v-if="lists.length === 0 && !isLoading">
      <i class="el-icon-warning">&nbsp;現在表示できる活動はありません。</i>
    </template>
    <template v-else>
      <el-col :span="6" v-for="(element,index) in lists" :key="index" class="col-style">
        <el-card :body-style="{ padding: '15px'}" class="box-card">
          <div slot="header">
            <a href="element.url" target="_blank">{{element.title}}</a>
          </div>
          <div class="buttom content-style text">
            <div>{{ element.created_at | formatDate }}</div>
            <span>
              <img src="element.user.profile_image_url" width="15" height="15">

              <template v-if="element.user.description">
                <el-popover
                  slot="desription"
                  plaement="top-start"
                  width="300"
                  trigger="hover"
                  :content="element.user.description"
                >
                  <!-- ユーザー名 -->
                  <span slot="reference">&nbsp;{{ element.user.id }}</span>
                </el-popover>
              </template>
              <template v-else>
                <!-- ユーザー名 -->
                <span>&nbsp;{{ element.user.id }}</span>
              </template>
            </span>
            &nbsp;
            <span>
              <i class="el-icon-star-off">{{ element.likes_count }}</i>
            </span>
            <!-- 本文 -->
            <div>{{ element.body | description }}</div>
            <!-- タグ -->
            <el-tag
              size="mini"
              type="info"
              class="tab-style"
              v-for="(tag, index) in element.tags"
              :key="index"
            >{{ tag.name }}</el-tag>
          </div>
        </el-card>
      </el-col>
      <!-- ページトップへスクロール用のボタン -->
      <div v-if="250 < scrollY" class="page-component-up">
        <transition name="fade">
          <i class="el-icon-caret-top" @click="scrollTop"/>
        </transition>
      </div>
    </template>
  </div>
</template>