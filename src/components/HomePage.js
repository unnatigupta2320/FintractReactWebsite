import ImageCarousel from './ImageCarousal';
import UserForm from './UserForm';
import '../styling/HomePage.css';

function HomePage() {
  return (
    <div className="App">
      <ImageCarousel/>
      <UserForm/>
    </div>
  );
}

export default HomePage;