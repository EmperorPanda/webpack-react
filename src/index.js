import React from 'react';
import ReactDOM from 'react-dom';
import styles from './assets/css/index.css'
console.log(styles);
class App extends React.Component {
    render () {
    return (
    <div className={styles.hello}>
        你好中国年
    
    是不是对你陈诺了太多还是11ß
    </div>
    )
    }
}
ReactDOM.render(
    <App/>,
    document.getElementById('root')
);