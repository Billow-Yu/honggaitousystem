const base = {
    get() {
        return {
            url : "http://localhost:8080/honggaitousystem/",
            name: "honggaitousystem",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/honggaitousystem/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "红盖头婚恋交友系统"
        } 
    }
}
export default base
