import React, { PureComponent } from 'react'
import FormHoc from '../form-hoc/index'
import BorderHoc from '../border-hoc'



// @BorderHoc('black')
// @BorderHoc('green')
// @BorderHoc('yellowgreen')
// @BorderHoc('red')
// @BorderHoc('blue')
@FormHoc
class From extends PureComponent {

    submit =  () => {
        const {getFiledsValue, getFiledValue, validateForm } = this.props
        // const values = getFiledsValue();
        // const name = getFiledValue('username');
        // console.log(`name`, name)
        validateForm().then((values)=> {
            console.log(`values`, values)
        }).catch((errors) => {
            console.log(`errors`, errors)
        })
    }

    render() {
    const { decolorateFileds} = this.props;
    const CustomDom =  BorderHoc('black')(() => <div>123</div>)
        return (
            <div>
                {
                   <CustomDom />
                }
                <div>
                    用户名：{
                        decolorateFileds('username', {
                            rules: [
                                { require: true, message: 'username 必填' }
                            ]
                        })(<input name="username" type="text" placeholder="username" />)
                        
                    }
                </div>
                <div>
                    密码： {
                        decolorateFileds('password', {
                            rules: [
                                { require: true , message: 'password 必填'}
                            ]
                        })(<input type="password" name="password" placeholder="password" />)
                    }
                </div>
                <div>
                    <button onClick={this.submit}>提交</button>
                </div>
            </div>
        )
    }
}
export default From