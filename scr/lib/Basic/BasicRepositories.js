'use strict'

class BasicRepositories {
    constructor(tableName) {
        this.tableName = tableName;
    }

    //Nhận vào 1 mảng các đối tượng cần add vào database
    async addObjectToTable(object) {
        return await this.tableName.create(object)
            .then(res => {
                console.log("Đã thêm vào database!");
                return res;
            })
            .catch(err => {
                console.info("Lỗi " + err);
                return null;
            })
    }


    async updateObjectToTableById(id, newObject) {
        return await this.tableName.findById(id)
            .then(res => {
                console.log("Cập nhật thành công!");
                console.log(newObject);
                if (res) res.updateAttributes(newObject);
            })
    }

    async getAllinDatabase() {
        return await this.tableName.findAll()
            .then(res => {
                let arr = [];
                for (let i = 0; i < res.length; i++) {
                    let data = res[i].dataValues;
                    arr.push(data);
                }
                return arr;
            })
            .catch(err => {
                console.log(err);
                return null;
            })
    }
}

module.exports = BasicRepositories;