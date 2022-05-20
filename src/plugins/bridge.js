export default {

    install(Vue) {

        const uagent = navigator.userAgent.toLowerCase(); //유저에이전트 문자열을 얻어 소문자로 변환
        const android = uagent.search("android");
        const iPhone = uagent.search("iphone");
        const iPad = uagent.search("ipad");

        const bridge = {
            setData(data) {
                console.log(JSON.stringify(data))
                if (android > -1) {
                    window.mid.setData(JSON.stringify(data))
                } else if (iPhone > -1 || iPad > -1) {
                    window.location = 'mid://setData/' + JSON.stringify(data)
                }
            },
            complete() {
                if (android > -1) {
                    window.mid.complete()
                } else if (iPhone > -1 || iPad > -1) {
                    window.location = 'mid://complete'
                }
            },
        }

        Vue.bridge = bridge
        window.bridge = bridge
    }
};
