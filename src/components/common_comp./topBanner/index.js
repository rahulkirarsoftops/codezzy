import { Link } from 'react-router-dom'
import './style.css';


const TopBanner = (props) => {
    return (
        <section className='page-header'>
            {
                props.props?.map((item) => {
                    return (
                        <div className='title-block'>
                            <h1>{item.heading}</h1>
                            <ul className='list-inline'>
                                <li className='list-inline-item'>
                                    <Link to={'/'} className='links'>{item.page}</Link>
                                </li>
                                <li className='list-inline-item'>/</li>
                                <li className='list-inline-item'><span>{item.curr_page}</span></li>
                            </ul>
                        </div>
                    )
                })
            }
        </section >
    )
}

export default TopBanner;
