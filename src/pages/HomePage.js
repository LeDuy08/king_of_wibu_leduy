import React from 'react';  
import '../assets/css/Home.css'; // Import CSS cho trang chủ  
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa'; // Sử dụng icon sao  

const HomePage = () => {  
  // Giả lập dữ liệu đánh giá cho từng phòng (rating từ 1-5)  
  const rooms = [  
    { id: 1, name: 'localagi', address: 'tôi la con ga nhat thich nhieu thu tren he gioi', price: '1,000,000 VND', rating: 4.5, image: 'https://media.sojohotels.com/sojo-lao-cai/8cea768748a7757b0c201677425255277.png' },  
    { id: 2, name: 'Phòng 2', address: 'Địa chỉ khách sạn 2', price: '1,200,000 VND', rating: 3, image: 'https://q-xx.bstatic.com/xdata/images/hotel/263x210/595548591.jpeg?k=01741bc3aef1a5233dd33794dda397083092c0215b153915f27ea489468e57a2&o=' },  
    { id: 3, name: 'Phòng 3', address: 'Địa chỉ khách sạn 3', price: '900,000 VND', rating: 4, image: 'https://via.placeholder.com/200?text=Phòng+3' },  
    { id: 4, name: 'Phòng 4', address: 'Địa chỉ khách sạn 4', price: '1,500,000 VND', rating: 5, image: 'https://via.placeholder.com/200?text=Phòng+4' },  
    { id: 5, name: 'Phòng 5', address: 'Địa chỉ khách sạn 5', price: '800,000 VND', rating: 2.5, image: 'https://via.placeholder.com/200?text=Phòng+5' },  
    { id: 6, name: 'Phòng 6', address: 'Địa chỉ khách sạn 6', price: '950,000 VND', rating: 3.5, image: 'https://via.placeholder.com/200?text=Phòng+6' },  
    { id: 7, name: 'Phòng 7', address: 'Địa chỉ khách sạn 7', price: '1,300,000 VND', rating: 4.8, image: 'https://via.placeholder.com/200?text=Phòng+7' },  
    { id: 8, name: 'Phòng 8', address: 'Địa chỉ khách sạn 8', price: '1,000,000 VND', rating: 4.2, image: 'https://via.placeholder.com/200?text=Phòng+8' },  
  ];  

  // Hàm render sao dựa trên rating  
  const renderStars = (rating) => {  
    const fullStars = Math.floor(rating);  
    const halfStar = rating % 1 !== 0; // Nếu rating có phần lẻ, hiện nửa sao  
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);  

    return (  
      <>  
        {[...Array(fullStars)].map((_, index) => (  
          <FaStar key={index} color="#ffc107" />  
        ))}  
        {halfStar && <FaStarHalfAlt color="#ffc107" />}  
        {[...Array(emptyStars)].map((_, index) => (  
          <FaRegStar key={index} color="#ffc107" />  
        ))}  
      </>  
    );  
  };  

  return (  
    <div className="homepage">  
      <div className="banner">  
        <img  
          src="https://ik.imagekit.io/tvlk/image/imageResource/2024/09/09/1725851891803-f3c888664c5d10ee45d31cbfac375c2c.jpeg?tr=q-75"  
          alt="Hotel Booking Banner"  
        />  
      </div>  

      <div className="promotion">  
        <h2>Mã giảm giá Khách sạn</h2>  
        <div className="promotion-item">  
          <span>Mã: HOTELGANNHA</span>  
          <p>Giảm đến 300K nội địa</p>  
          <p>Giảm 80K, đặt nội địa từ 3 triệu...</p>  
          <button>Sao chép mã</button>  
        </div>  
        <div className="promotion-item">  
          <span>Mã: STAYQUOCTE</span>  
          <p>Giảm đến 300K khi đặt Thái Lan, Singapore, Malaysia</p>  
          <p>Giảm 3% tối đa 300K...</p>  
          <button>Sao chép mã</button>  
        </div>  
      </div>  

      <div className="categories">  
        <h2>Danh mục nổi bật</h2>  
        <div className="category-container">  
          <div className="category">  
            <img  
              src="https://via.placeholder.com/300x150?text=Luxury+Rooms"  
              alt="Luxury Rooms"  
            />  
            <h3>Luxury Rooms</h3>  
            <button>Đặt ngay</button>  
          </div>  
          <div className="category">  
            <img  
              src="https://via.placeholder.com/300x150?text=Budget+Rooms"  
              alt="Budget Rooms"  
            />  
            <h3>Budget Rooms</h3>  
            <button>Đặt ngay</button>  
          </div>  
        </div>  
      </div>  

      <div className="hotel-list">  
        <h2>Phòng khách sạn phổ biến</h2>  
        <div className="hotel-grid">  
          {rooms.slice(0, 4).map((room) => (  
            <div className="hotel-item" key={room.id}>  
              <img  
                src={`https://q-xx.bstatic.com/xdata/images/hotel/263x210/595548591.jpeg?k=01741bc3aef1a5233dd33794dda397083092c0215b153915f27ea489468e57a2&o=${room.id}`}  
                alt={`Room ${room.id}`}  
              />  
              <h3>{room.name}</h3>  
              <p>{room.address}</p>  
              <p>Giá từ: {room.price}/đêm</p>  
              <div className="rating">  
                {renderStars(room.rating)}  
                <span className="rating-text">({room.rating})</span>  
              </div>  
              <button>Thêm vào giỏ</button>  
            </div>  
          ))}  
        </div>  
      </div>  

      <div className="special-rooms">  
        <h2>Phòng đặc biệt</h2>  
        <div className="hotel-grid">  
          {rooms.slice(4, 8).map((room) => (  
            <div className="hotel-item" key={room.id}>  
              <img  
                src={`https://q-xx.bstatic.com/xdata/images/hotel/263x210/595548591.jpeg?k=01741bc3aef1a5233dd33794dda397083092c0215b153915f27ea489468e57a2&o=${room.id}`}  
                alt={`Room ${room.id}`}  
              />  
              <h3>{room.name}</h3>  
              <p>{room.address}</p>  
              <p>Giá từ: {room.price}/đêm</p>  
              <div className="rating">  
                {renderStars(room.rating)}  
                <span className="rating-text">({room.rating})</span>  
              </div>  
              <button>Thêm vào giỏ</button>  
            </div>  
          ))}  
        </div>  
      </div>  

      <div className="partners">  
        <h2>Đối tác khách sạn</h2>  
        <p>Đối tác khách sạn trong nước và quốc tế</p>  
        <div className="partners-logos">  
          <img src="https://q-xx.bstatic.com/xdata/images/hotel/263x210/595548591.jpeg?k=01741bc3aef1a5233dd33794dda397083092c0215b153915f27ea489468e57a2&o=" alt="Partner 1" />  
          <img src="https://q-xx.bstatic.com/xdata/images/hotel/263x210/595548591.jpeg?k=01741bc3aef1a5233dd33794dda397083092c0215b153915f27ea489468e57a2&o=" alt="Partner 2" />  
          <img src="https://q-xx.bstatic.com/xdata/images/hotel/263x210/595548591.jpeg?k=01741bc3aef1a5233dd33794dda397083092c0215b153915f27ea489468e57a2&o=" alt="Partner 3" />  
        </div>  

        <h2>Đối tác thanh toán</h2>  
        <p>Những đối tác thanh toán đáng tin cậy của chúng tôi...</p>  
        <div className="payment-logos">  
          <img src="https://via.placeholder.com/100x50?text=Payment+Partner" alt="Payment Partner 1" />  
          <img src="https://via.placeholder.com/100x50?text=Payment+Partner" alt="Payment Partner 2" />  
          <img src="https://via.placeholder.com/100x50?text=Payment+Partner" alt="Payment Partner 3" />  
        </div>  
      </div>  

      <div className="hot-destinations">  
        <h2>Điểm đến hot nhất do Traveloka đề xuất</h2>  
        <div className="destination-grid">  
          {[  
            { name: 'Đà Nẵng', imgSrc: 'https://q-xx.bstatic.com/xdata/images/hotel/263x210/595548591.jpeg?k=01741bc3aef1a5233dd33794dda397083092c0215b153915f27ea489468e57a2&o=', hotels: '763 khách sạn' },  
            { name: 'Nha Trang', imgSrc: 'https://q-xx.bstatic.com/xdata/images/hotel/263x210/595548591.jpeg?k=01741bc3aef1a5233dd33794dda397083092c0215b153915f27ea489468e57a2&o=', hotels: '560 khách sạn' },  
            { name: 'Phú Quốc', imgSrc: 'https://q-xx.bstatic.com/xdata/images/hotel/263x210/595548591.jpeg?k=01741bc3aef1a5233dd33794dda397083092c0215b153915f27ea489468e57a2&o=', hotels: '925 khách sạn' },
            { name: 'Vũng Tàu', imgSrc: 'https://via.placeholder.com/200x150?text=Vũng+Tàu', hotels: '380 khách sạn' },  
            { name: 'Hà Nội', imgSrc: 'https://via.placeholder.com/200x150?text=Hà+Nội', hotels: '1060 khách sạn' },  
            { name: 'Đà Lạt', imgSrc: 'https://via.placeholder.com/200x150?text=Đà+Lạt', hotels: '591 khách sạn' },  
            { name: 'Hội An', imgSrc: 'https://via.placeholder.com/200x150?text=Hội+An', hotels: '563 khách sạn' },  
            { name: 'Phan Thiết', imgSrc: 'https://via.placeholder.com/200x150?text=Phan+Thiết', hotels: '243 khách sạn' },  
            { name: 'Quy Nhơn', imgSrc: 'https://via.placeholder.com/200x150?text=Quy+Nhơn', hotels: '80 khách sạn' },  
            { name: 'Thái Lan', imgSrc: 'https://via.placeholder.com/200x150?text=Thái+Lan', hotels: '1584 khách sạn' },
            { name: 'Singapore', imgSrc: 'https://via.placeholder.com/200x150?text=Singapore', hotels: '690 khách sạn' },  
            { name: 'Malaysia', imgSrc: 'https://via.placeholder.com/200x150?text=Malaysia', hotels: '846 khách sạn' },  
          ].map((destination, index) => (  
            <div className="destination" key={index}>  
              <img src={destination.imgSrc} alt={destination.name} />  
              <h3>{destination.name}</h3>  
              <p>{destination.hotels}</p>  
            </div>  
          ))}  
        </div>  
      </div>  
    </div>  
  );  
};  

export default HomePage;  
