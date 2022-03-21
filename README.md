# 樹梅派連接
![image](/front/thumb-665255.jpg)
### 
* 樹莓派連接DHT11有三個腳位，一個電源，一個接地，另一個則是資料傳輸，我們是將程式碼寫在資料傳輸的腳位("4"這個腳位)

# 頁面顯示
![image](/front/thumb-Clipboard%20-%202022%E5%B9%B43%E6%9C%8821%E6%97%A5%E4%B8%8A%E5%8D%889%E9%BB%9E49%E5%88%86.png)

#### 目前端遇到的問題是能在單張表格中顯示即時資訊，兩張表格無法同時顯現，尚在解決當中。

# 前端
* 使用React

# 後端
* 使用Node，Axios抓資料

# MQTT
## 功能
* Publish ：將溫度濕度資料傳送出去
* Subscrible：接收溫度資料，還有從 MQTTlens Publish 出來的文字資訊