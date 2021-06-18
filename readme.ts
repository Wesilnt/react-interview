// 假设已定义好 fetch, 引入方式为 import { fetch } from '@/fetch';

// fetch 返回结构为
export interface FetchResponse<T = any> {
    success: boolean,
    // 和后端的约定是有报错就可能不返回data,或者data为null，请求成功errors为null,
    data?: T,
    errors?: Array<{
        message: string,
        code: number,
    }>
}


// ## 需求描述

// 1. 每隔四秒获取一次服务器时间 getServerDate

// 获取函数为 fetch({ url: "getServerDate" }) , 返回为 FetchResponse<string>

// 2. 获取数据列表，假设数据可能有几百个 getList

// 数据结构为
export interface IListItem {
    id: string,
    code?: string,
    name?: string,
    price: string,
    enabled: 0 | 1
}

// 获取函数为 fetch({ url: "getList" }) , 返回为 FetchResponse<IListItem[]>

// 数组处理：1.对数组的每个子项进行组合，将 name | code 组合成 name_code, 放在item上，例如 item.name_code 2.筛选出 enabled 为 1 且 price 大于 10 的 子项

// 3.   展示服务器时间，展示数据列表

// 将列表的每个子项item拆分成单个组件 ListItem,且展示 ListItem 的 name_code,在 ListItem 上绑定事件： 打印item,且高亮点击的子项。高亮的类名为 highlight-item，

// 须有一样式声明传入ListItem，样式为
// {
//     display: "inline-block",
//     // ...otherStyle
// }

/*
// UI类似于
<>
    {serverDate}
    {
    list.map((item)=> <ListItem >)
    }
</>
 */
