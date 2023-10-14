import { AutoComplete, Button, Card, DatePicker, Input, Space, message } from "antd";
import { useCallback, useRef, useState } from "react";
import { toPng } from 'html-to-image';

export default function LuckinCoffee() {
  // const [name, setName] = useState('')
  // const [code, setCode] = useState('')
  // const [type, setType] = useState('')

  const [data, setData] = useState({
    name: '',
    code: '',
    type: '',
    number1: '',
    number2: '',
    temp: '',
    product: '',
    sweet: '',
    date: '',
    time: '',
    remark: '建议尽快饮用，风味更佳'
  })
  const ref = useRef<HTMLDivElement>(null)
  const [messageApi, contextHolder] = message.useMessage();
  const key = 'updatable';
  const out = useCallback(() => {
    if (ref.current === null) {
      return
    }

    messageApi.open({
      key,
      type: 'loading',
      content: 'Loading...',
    });

    toPng(ref.current, { cacheBust: true, })
      .then((dataUrl) => {
        const link = document.createElement('a')
        link.download = 'my-image-name.png'
        link.href = dataUrl
        link.click()
        messageApi.open({
          key,
          type: 'success',
          content: '生成成功，请留意下载界面',
        });
      })
      .catch((err) => {
        console.log(err)
        messageApi.open({
          key,
          type: 'error',
          content: '生成失败，请将控制台截图反馈给开发者',
        });
      })
  }, [ref])

  const fillTest = () => {
    setData({
      name: '刘**',
      code: '114',
      type: '自提',
      number1: '1',
      number2: '1',
      temp: '【热】',
      product: '马斯卡彭生酪拿铁',
      sweet: '标准糖',
      date: '2023-10-14',
      time: '15:34',
      remark: '建议尽快饮用，风味更佳'
    })
  }

  return (
    <div>
      {contextHolder}
      <Space direction="vertical" className="w-full">
        <Card title="信息" size="small" extra={<a onClick={fillTest}>测试数据</a>}>
          <Space direction="vertical">
            <Input addonBefore="Hi，" addonAfter="先生" className="w-50" placeholder="您的姓名" value={data.name} onChange={(v)=>setData({...data, name: v.target.value})}/>
            <Space.Compact>
              <Input placeholder="取餐码" value={data.code} onChange={(v)=>setData({...data, code: v.target.value})}/>
              <AutoComplete
                options={[{value: '自提'},{value: '堂食'}]}
                className="w-30"
                value={data.type} onChange={(v)=>setData({...data, type: v})}
                placeholder="取餐方式"
              />
              
            </Space.Compact>
            <Space>
              <Input addonBefore="第" placeholder="1" className="" value={data.number1} onChange={(v)=>setData({...data, number1: v.target.value})}/>
              <span className="">/</span>
              <Input addonAfter="杯" placeholder="1" className="" value={data.number2} onChange={(v)=>setData({...data, number2: v.target.value})}/>
            </Space>
            <Space.Compact className="w-full">
              <AutoComplete
                options={[{value: '【热】'},{value: '【冰】'}]}
                className="w-20"
                value={data.temp} onChange={(v)=>setData({...data, temp: v})}
                placeholder="温度"
              />
              <AutoComplete
                options={[{value: '马斯卡彭生酪拿铁'},{value: '生椰拿铁'}]}
                className="flex-1"
                value={data.product} onChange={(v)=>setData({...data, product: v})}
                placeholder="商品"
              />
              <AutoComplete
                options={[{value: '标准糖'},{value: '少糖'},{value: '无糖'}]}
                className=" w-20"
                placeholder="甜度"
                value={data.sweet} onChange={(v)=>setData({...data, sweet: v})}
              />
              {/* <Input placeholder="商品" className="flex-1"/> */}
            </Space.Compact>
            <Space.Compact className="w-full">
              <DatePicker placeholder="日期" onChange={(_,v)=>setData({...data, date: v})} format={'YYYY-MM-DD'} showToday />
              <DatePicker picker="time" placeholder="时间" onChange={(_,v)=>setData({...data, time: v})} format={'hh:mm'} />
            </Space.Compact>
            <Input placeholder="备注" defaultValue={'建议尽快饮用，风味更佳'} className="" value={data.remark} onChange={(v)=>setData({...data, remark: v.target.value})}/>
          </Space>
        </Card>
        <Card title="预览" size="small">
          <div className="flex items-center justify-center">
            <div className="bg-[#A8D3FD] rounded-md relative w-80 " ref={ref}>
              <img src="/lucking_coffee.svg" alt="" className="absolute w-8 right-4 top-5" />
              <div className="px-3 text-xl">Hi，{data.name || '未填写'} 先生</div>
              <div className="flex items-center px-3 pt-2">
                <div className="font-bold text-4xl">{data.code || '000'}</div>
                <div className="text-lg pl-2">{data.type || '自己飞走'}</div>
                <div className="text-lg pl-2">第{data.number1 || '1'}/{data.number2 || '1'}杯</div>
              </div>
              <div className="flex">
                <div className="text-lg pl-2">{data.temp || '【烫烫烫】'}</div>
                <div className="text-lg pl-2">{data.product || '锟斤拷'}</div>
              </div>
              <div className="text-lg pl-2">{data.sweet || '胰岛素配合'}</div>
              <div className="pl-2 font-bold pt-4 line-height-2">{data.date || '0000-00-00'} {data.time || '00:00'}</div>
              <div className="pl-2 pb-3">{data.remark}</div>
            </div>
          </div>

          <Button className="mt-4 w-full" type="primary" onClick={out}>导出图片</Button>
        </Card>
      </Space>
    </div>
  )
}
