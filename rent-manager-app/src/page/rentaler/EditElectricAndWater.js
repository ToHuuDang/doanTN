import { useEffect, useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import SidebarNav from './SidebarNav';
import { toast } from 'react-toastify';
import Nav from './Nav';
import axios from 'axios';
import { getElectricAndWater, getRentOfHome } from '../../services/fetch/ApiUtils';

const EditElectric = (props) => {
    const { authenticated, role, currentUser, location, onLogout } = props;
    const { id } = useParams();
    const [roomOptions, setRoomOptions] = useState([]);

    const [electricData, setElectricData] = useState({
        month: "",
        name: "",
        lastMonthNumberOfElectric: "",
        thisMonthNumberOfElectric: "",
        moneyEachNumberOfElectric: "",
        lastMonthBlockOfWater: "",
        thisMonthBlockOfWater: "",
        moneyEachBlockOfWater: "",
        paid: '',
        roomId: '',
        room: ''
    });

    const [roomId, setRoomId] = useState();

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setElectricData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    console.log("electricData", electricData);


    const handleSubmit = async (event) => {
        event.preventDefault();
        await axios.put(`http://localhost:8080/electric-water/update/${id}`, electricData, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
            },
        })
            .then(response => {
                toast.success(response.message);
                toast.success("Cập nhật hợp đồng thành công!!")
            })
            .catch(error => {
                toast.error((error && error.message) || 'Oops! Có điều gì đó xảy ra. Vui lòng thử lại!');
            });

        console.log(electricData);
    };

    useEffect(() => {
        getRentOfHome()
        .then((response) => {
            const room = response.content;
            setRoomOptions(room);
        })
        .catch((error) => {
            toast.error(
            (error && error.message) ||
                "Oops! Có điều gì đó xảy ra. Vui lòng thử lại!"
            );
        });

        getElectricAndWater(id)
            .then(response => {
                const contract = response;
                setElectricData(prevState => ({
                    ...prevState,
                    ...contract
                }));
                setRoomId(response.room.id)
            })
            .catch(error => {
                toast.error((error && error.message) || 'Oops! Có điều gì đó xảy ra. Vui lòng thử lại!');
            });

    }, [id]);

  return (
    <div>
      <div className="wrapper">
            <nav id="sidebar" className="sidebar js-sidebar">
                <div className="sidebar-content js-simplebar">
                    <a className="sidebar-brand" href="index.html">
                        <span className="align-middle">RENTALER PRO</span>
                    </a>
                    <SidebarNav />
                </div>
            </nav>

            <div className="main">
                <Nav onLogout={onLogout} currentUser={currentUser} />

                <br />
                <div className="container-fluid p-0">
                    <div className="card">
                        <div className="card-header">
                            <h5 className="card-title">Chỉnh sửa hóa đơn điện nước</h5>
                        </div>
                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                                <label className="form-label" htmlFor="name">
                                    Tên hóa đơn
                                </label>
                                <div className="row mx-1 mb-3">
                                    <input
                                    type="text"
                                    className="form-control"
                                    id="name"
                                    name="name"
                                    value={electricData.name}
                                    onChange={handleInputChange}
                                    />
                                </div>
                            <div className="row">
                                <div className="mb-3 col-md-6">
                                <label className="form-label" htmlFor="lastMonthBlock">
                                    Tháng sử dụng
                                </label>
                                <select
                                    className="form-control"
                                    id="lastMonthBlock"
                                    name="month"
                                    value={electricData.month}
                                    onChange={handleInputChange}
                                >
                                    {Array.from({ length: 12 }, (_, i) => (
                                    <option key={i + 1} value={i + 1}>
                                        Tháng {i + 1}
                                    </option>
                                    ))}
                                </select>
                                </div>
                                <div className="mb-3 col-md-6">
                                <label className="form-label" htmlFor="lastMonthNumberOfElectric">
                                    Số điện tháng trước
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="lastMonthNumberOfElectric"
                                    name="lastMonthNumberOfElectric"
                                    value={electricData.lastMonthNumberOfElectric}
                                    onChange={handleInputChange}
                                />
                                </div>
                            </div>

                            <div className="row">
                                <div className="mb-3 col-md-6">
                                <label className="form-label" htmlFor="thisMonthNumberOfElectric">
                                    Số điện tháng này
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="thisMonthNumberOfElectric"
                                    name="thisMonthNumberOfElectric"
                                    value={electricData.thisMonthNumberOfElectric}
                                    onChange={handleInputChange}
                                />
                                </div>
                                <div className="mb-3 col-md-6">
                                <label className="form-label" htmlFor="moneyEachNumberOfElectric">
                                    Số tiền mỗi số
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="moneyEachNumberOfElectric"
                                    name="moneyEachNumberOfElectric"
                                    value={electricData.moneyEachNumberOfElectric}
                                    onChange={handleInputChange}
                                />
                                </div>
                            </div>

                            <div className="row">
                                <div className="mb-3 col-md-6">
                                    <label className="form-label" htmlFor="lastMonthBlockOfWater">
                                    Số khối tháng trước
                                    </label>
                                    <input
                                    type="text"
                                    className="form-control"
                                    id="lastMonthBlockOfWater"
                                    name="lastMonthBlockOfWater"
                                    value={electricData.lastMonthBlockOfWater}
                                    onChange={handleInputChange}
                                    />
                                </div>

                                <div className="mb-3 col-md-6">
                                    <label className="form-label" htmlFor="thisMonthBlockOfWater">
                                    Số khối tháng này
                                    </label>
                                    <input
                                    type="text"
                                    className="form-control"
                                    id="thisMonthBlockOfWater"
                                    name="thisMonthBlockOfWater"
                                    value={electricData.thisMonthBlockOfWater}
                                    onChange={handleInputChange}
                                    />
                                </div>
                            </div>

                            <div className="row">
                                <div className="mb-3 col-md-6">
                                    <label className="form-label" htmlFor="moneyEachBlockOfWater">
                                    Số tiền mỗi khối
                                    </label>
                                    <input
                                    type="text"
                                    className="form-control"
                                    id="moneyEachBlockOfWater"
                                    name="moneyEachBlockOfWater"
                                    value={electricData.moneyEachBlockOfWater}
                                    onChange={handleInputChange}
                                    />
                                </div>
                                
                                <div className="mb-3 col-md-6">
                                    <label className="form-label" htmlFor="paid">Trạng thái</label>
                                    <select className="form-select" id="paid" name="paid" value={electricData.paid} onChange={handleInputChange}>
                                        <option key={true} value={true}>Đã thanh toán</option>
                                        <option key={false} value={false}>Chưa thanh toán</option>
                                    </select>
                                </div>
                            </div>
                                <div className='mb-3'>
                                    <label className="form-label" htmlFor="locationId">Phòng</label>
                                    <select className="form-control" id="locationId" name="roomId" value={electricData.roomId} onChange={handleInputChange} disabled>
                                        <option key={electricData.room.id} value={electricData.room.id}>{electricData.room.title}</option>
                                    </select>
                                </div>

                                <button type="submit" className="btn btn-primary">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    </div>
  )
}

export default EditElectric
