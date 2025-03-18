const base = {
    get() {
                return {
            url : "http://localhost:8088/housing_rental_system/",
            name: "housing_rental_system",
            // 退出到首页链接
            indexUrl: 'http://localhost:8088/housing_rental_system/front/index.html'
        };
            },
    getProjectName(){
        return {
            projectName: "社区房屋租赁系统"
        } 
    }
}
export default base
