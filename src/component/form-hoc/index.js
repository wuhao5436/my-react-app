import React, { Component } from 'react'

const FormHoc = (Comp) => {
   return class AnyC extends Component {
        constructor(props) {
            super(props);
            this.rulesObj = {};
            this.errorObj = {};
        }

        /** 绑定数据 */
        decolorateFileds = (name, options) => innerComp => {
            const { rules } = options;
            this.rulesObj[name] = rules
            return React.cloneElement(innerComp, {
                onChange: (e) => {
                    this.setState({
                        [name]: e.target.value
                    });
                }
            })
        }

        /** 获取values值 */
        getFiledsValue = () => {
            return {...this.state}
        }

        /** 获取value值 */
        getFiledValue = (name) => {
            return this.state[name]
        }

        /** 校验表单 */
        validateForm = () => {
            return new Promise((resolve, reject)=> {
                Object.keys(this.rulesObj).map(name => {
                    if (!this.state[name]) {
                        this.errorObj[name] = this.rulesObj[name][0].message
                    }
                })
                if (JSON.stringify(this.errorObj) === '{}') {
                    return resolve({...this.state})
                }
                reject(this.errorObj)
            })
        }
    
        render() {
            const { props } = this;
                return  <Comp 
                        {...props}
                        decolorateFileds={this.decolorateFileds}
                        getFiledsValue={this.getFiledsValue}
                        getFiledValue={this.getFiledValue}
                        validateForm={this.validateForm}
                     />
        }
    }
}


export default FormHoc


 