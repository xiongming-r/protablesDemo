<script setup lang="tsx">
import { ref } from 'vue'
import { ElMessage } from 'element-plus'
import { EditPen, View } from "@element-plus/icons-vue";

defineProps<{ msg: string }>()
const columns = [
  { type: "selection", fixed: "left", width: 80 },
  { type: "index", label: "#", width: 80 },
  { type: "sort", label: "Sort", width: 80 },
  { type: "expand", label: "Expand", width: 100 },
  {
    prop: "username",
    label: "用户姓名",
    search: { el: "input" },

    render: (scope: any) => {
      return (
        <el-button type="primary" link onClick={() => ElMessage.info("我是通过 tsx 语法渲染的内容")}>
          {scope.row.username}
        </el-button>
      );
    }
  },
  {
    prop: "gender",
    label: "性别",
    //支持定义字典,支持请求
    enum: [
      {
        genderLabel: "男",
        genderValue: 1
      },
      {
        genderLabel: "女",
        genderValue: 2
      },
    ],
    fieldNames: { label: "genderLabel", value: "genderValue" },
    search: { el: "select", props: { filterable: true } },
  },
  {
    // 多级 prop
    prop: "user.detail.age",
    label: "年龄",
    search: {
      // 自定义 search 显示内容
      render: ({ searchParam }: any) => {
        return (
          <div class="flx-center">
            <el-input vModel_trim={searchParam.minAge} placeholder="最小年龄" />
            <span class="mr10 ml10">-</span>
            <el-input vModel_trim={searchParam.maxAge} placeholder="最大年龄" />
          </div>
        );
      }
    }
  },
  { prop: "idCard", label: "身份证号", search: { el: "input" } },
  { prop: "email", label: "邮箱" },
  { prop: "address", label: "居住地址" },
  {
    prop: "status",
    label: "用户状态",
    enum: [
      {
        tagType: "success",
        userLabel: "启用",
        userStatus: 1
      },
      {
        tagType: "danger",
        userLabel: "禁用",
        userStatus: 0
      },
    ],
    search: { el: "tree-select", props: { filterable: true } },
    fieldNames: { label: "userLabel", value: "userStatus" },
  },
  {
    prop: "createTime",
    label: "创建时间",
    width: 180,
    search: {
      el: "date-picker",
      span: 2,
      props: { type: "datetimerange", valueFormat: "YYYY-MM-DD HH:mm:ss" },
      defaultValue: ["2022-11-12 11:35:00", "2022-12-12 11:35:00"]
    }
  },
  { prop: "operation", label: "操作", fixed: "right", width: 330 }
];

// const count = ref(0)
const tableData = ref([
  {
    "id": "187942382052382548",
    "username": "黄娟",
    "gender": 2,
    "user": {
      "detail": {
        "age": 25
      }
    },
    "idCard": "187942382052382548",
    "email": "n.farc@cgegkcrwgf.vu",
    "address": "上海 上海市",
    "createTime": "2001-05-18 21:03:18",
    "status": 0,
    "avatar": "https://i.imgtg.com/2023/01/16/QR57a.jpg"
  },
  {
    "id": "581942405159105870",
    "username": "王刚",
    "gender": 1,
    "user": {
      "detail": {
        "age": 23
      }
    },
    "idCard": "581942405159105870",
    "email": "x.vfpuv@pmcr.vc",
    "address": "广西壮族自治区 北海市",
    "createTime": "1991-02-22 07:15:49",
    "status": 0,
    "avatar": "https://i.imgtg.com/2023/01/16/QRa0s.jpg"
  },
  {
    "id": "881279807510897296",
    "username": "沈敏",
    "gender": 1,
    "user": {
      "detail": {
        "age": 15
      }
    },
    "idCard": "881279807510897296",
    "email": "n.ioaim@aiietsnl.ht",
    "address": "山西省 太原市",
    "createTime": "2009-06-25 11:00:35",
    "status": 1,
    "avatar": "https://i.imgtg.com/2023/01/16/QR57a.jpg"
  },
  {
    "id": "145778480412341557",
    "username": "钱勇",
    "gender": 2,
    "user": {
      "detail": {
        "age": 22
      }
    },
    "idCard": "145778480412341557",
    "email": "b.fvterihoky@yysmbixm.ph",
    "address": "澳门特别行政区 离岛",
    "createTime": "1989-09-30 13:29:34",
    "status": 1,
    "avatar": "https://i.imgtg.com/2023/01/16/QRBHS.jpg"
  },
  {
    "id": "611947926673887557",
    "username": "方明",
    "gender": 1,
    "user": {
      "detail": {
        "age": 27
      }
    },
    "idCard": "611947926673887557",
    "email": "u.etujgk@umlv.ad",
    "address": "上海 上海市",
    "createTime": "2021-12-09 15:50:15",
    "status": 0,
    "avatar": "https://i.imgtg.com/2023/01/16/QR57a.jpg"
  },
  {
    "id": "464006517177922522",
    "username": "卢杰",
    "gender": 1,
    "user": {
      "detail": {
        "age": 11
      }
    },
    "idCard": "464006517177922522",
    "email": "t.rex@lnhnow.to",
    "address": "贵州省 铜仁市",
    "createTime": "1979-10-09 02:11:08",
    "status": 0,
    "avatar": "https://i.imgtg.com/2023/01/16/QRBHS.jpg"
  },
  {
    "id": "467549801871572244",
    "username": "毛静",
    "gender": 1,
    "user": {
      "detail": {
        "age": 12
      }
    },
    "idCard": "467549801871572244",
    "email": "k.wudtccoz@zuup.cg",
    "address": "天津 天津市",
    "createTime": "1981-10-13 21:56:07",
    "status": 1,
    "avatar": "https://i.imgtg.com/2023/01/16/QRqMK.jpg"
  },
  {
    "id": "171237828935466169",
    "username": "汪磊",
    "gender": 1,
    "user": {
      "detail": {
        "age": 23
      }
    },
    "idCard": "171237828935466169",
    "email": "u.lllyrtnxq@nlhkhcgz.il",
    "address": "辽宁省 抚顺市",
    "createTime": "1987-02-12 22:41:10",
    "status": 1,
    "avatar": "https://i.imgtg.com/2023/01/16/QR57a.jpg"
  },
  {
    "id": "130331397323488614",
    "username": "贾芳",
    "gender": 2,
    "user": {
      "detail": {
        "age": 15
      }
    },
    "idCard": "130331397323488614",
    "email": "h.tovh@ubh.tk",
    "address": "山东省 烟台市",
    "createTime": "1979-05-22 08:34:21",
    "status": 1,
    "avatar": "https://i.imgtg.com/2023/01/16/QR57a.jpg"
  },
  {
    "id": "376575369536250206",
    "username": "杜霞",
    "gender": 1,
    "user": {
      "detail": {
        "age": 27
      }
    },
    "idCard": "376575369536250206",
    "email": "z.oetxebgt@xsewy.bn",
    "address": "广西壮族自治区 钦州市",
    "createTime": "1971-11-17 16:26:33",
    "status": 1,
    "avatar": "https://i.imgtg.com/2023/01/16/QRa0s.jpg"
  }
])

const openDrawer = (info: any, row: any) => {
  ElMessage.success(info + JSON.stringify(row))
}
// console.log("ProTable",ProTable);
</script>

<template>
  <div class="table-box">
    <pro-table ref="proTable" title="用户列表" :columns="columns" :data="tableData">
      <template #expand="scope">
        {{ scope.row }}
      </template>
      <template #operation="scope">
        <el-button type="primary" link :icon="View" @click="openDrawer('查看', scope.row)"> 查看 </el-button>
        <el-button type="primary" link :icon="EditPen" @click="openDrawer('编辑', scope.row)"> 编辑 </el-button>
      </template>
    </pro-table>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
