
// // import React, { useState } from "react";
// // const CardForm = ({ onAddCard }) => {
// //   const [formData, setFormData] = useState({
// //     price: "",
// //     users: "",
// //     storage: "",
// //     support: "Email support",
// //   });

// //   const handleChange = (e) => {
// //     setFormData({ ...formData, [e.target.name]: e.target.value });
// //   };

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     onAddCard(formData);
// //     setFormData({
// //       price: "",
// //       users: "",
// //       storage: "",
// //       support: "Email support",
// //     });
// //   };

// //   return (
// //     <form onSubmit={handleSubmit} className="p-4 border rounded shadow-sm">
// //       <h4 className="mb-3">Створити нову картку</h4>

// //       <div className="mb-2">
// //         <label className="form-label">Ціна ($)</label>
// //         <input
// //           type="number"
// //           name="price"
// //           className="form-control"
// //           value={formData.price}
// //           onChange={handleChange}
// //           required
// //         />
// //       </div>

// //       <div className="mb-2">
// //         <label className="form-label">Кількість юзерів</label>
// //         <input
// //           type="number"
// //           name="users"
// //           className="form-control"
// //           value={formData.users}
// //           onChange={handleChange}
// //           required
// //         />
// //       </div>

// //       <div className="mb-2">
// //         <label className="form-label">Обсяг пам’яті (GB)</label>
// //         <input
// //           type="number"
// //           name="storage"
// //           className="form-control"
// //           value={formData.storage}
// //           onChange={handleChange}
// //           required
// //         />
// //       </div>

// //       <div className="mb-2">
// //         <label className="form-label">Тип підтримки</label>
// //         <select
// //           name="support"
// //           className="form-select"
// //           value={formData.support}
// //           onChange={handleChange}
// //         >
// //           <option>Email support</option>
// //           <option>Priority email support</option>
// //           <option>Phone and email support</option>
// //         </select>
// //       </div>

// //       <button type="submit" className="btn btn-primary w-100 mt-2">
// //         Додати картку
// //       </button>
// //     </form>
// //   );
// // };

// // const PricingCard = ({ price, users, storage, support }) => {
// //   return (
// //     <div className="col-md-4">
// //       <div className="card mb-4 shadow-sm">
// //         <div className="card-body">
// //           <h1 className="card-title pricing-card-title">
// //             ${price} <small className="text-muted">/ mo</small>
// //           </h1>
// //           <ul className="list-unstyled mt-3 mb-4">
// //             <li>{users} users included</li>
// //             <li>{storage} GB of storage</li>
// //             <li>{support}</li>
// //             <li>Help center access</li>
// //           </ul>
// //           <button className="w-100 btn btn-lg btn-outline-primary">
// //             Sign up
// //           </button>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // const PricingList = () => {
// //   const [cards, setCards] = useState([]);

// //   const addCard = (newCard) => {
// //     setCards([...cards, newCard]);
// //   };

// //   return (
// //     <div className="container py-5">
// //       <div className="row">
// //         <div className="col-md-4">
// //           <CardForm onAddCard={addCard} />
// //         </div>
// //         {cards.map((card, index) => (
// //           <PricingCard key={index} {...card} />
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default PricingList;


// import React, { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";

// const CardForm = ({ onAddCard }) => {
//   const [formData, setFormData] = useState({
//     price: "",
//     users: "",
//     storage: "",
//     support: "Email support",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onAddCard(formData);
//     setFormData({
//       price: "",
//       users: "",
//       storage: "",
//       support: "Email support",
//     });
//   };

//   return (
//     <form onSubmit={handleSubmit} className="p-4 border rounded shadow-sm">
//       <h4 className="mb-3">Створити нову картку</h4>

//       <div className="mb-2">
//         <label className="form-label">Ціна ($)</label>
//         <input
//           type="number"
//           name="price"
//           className="form-control"
//           value={formData.price}
//           onChange={handleChange}
//           required
//         />
//       </div>

//       <div className="mb-2">
//         <label className="form-label">Кількість юзерів</label>
//         <input
//           type="number"
//           name="users"
//           className="form-control"
//           value={formData.users}
//           onChange={handleChange}
//           required
//         />
//       </div>

//       <div className="mb-2">
//         <label className="form-label">Обсяг пам’яті (GB)</label>
//         <input
//           type="number"
//           name="storage"
//           className="form-control"
//           value={formData.storage}
//           onChange={handleChange}
//           required
//         />
//       </div>

//       <div className="mb-2">
//         <label className="form-label">Тип підтримки</label>
//         <select
//           name="support"
//           className="form-select"
//           value={formData.support}
//           onChange={handleChange}
//         >
//           <option>Email support</option>
//           <option>Priority email support</option>
//           <option>Phone and email support</option>
//         </select>
//       </div>

//       <button type="submit" className="btn btn-primary w-100 mt-2">
//         Додати картку
//       </button>
//     </form>
//   );
// };

// const PricingCard = ({ price, users, storage, support, onDelete }) => {
//   return (
//     <div className="col-md-4 position-relative">
//       <div className="card mb-4 shadow-sm">
//         <div className="card-body">
//           <button
//             className="btn btn-danger btn-sm position-absolute top-0 end-0 m-2"
//             onClick={onDelete}
//           >
//             ❌
//           </button>
//           <h1 className="card-title pricing-card-title">
//             ${price} <small className="text-muted">/ mo</small>
//           </h1>
//           <ul className="list-unstyled mt-3 mb-4">
//             <li>{users} users included</li>
//             <li>{storage} GB of storage</li>
//             <li>{support}</li>
//             <li>Help center access</li>
//           </ul>
//           <button className="w-100 btn btn-lg btn-outline-primary">
//             Sign up
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// const PricingList = () => {
//   const [cards, setCards] = useState([]);

//   const addCard = (newCard) => {
//     setCards([...cards, newCard]);
//   };

//   const deleteCard = (index) => {
//     setCards(cards.filter((_, i) => i !== index));
//   };

//   return (
//     <div className="container py-5">
//       <div className="row">
//         <div className="col-md-4">
//           <CardForm onAddCard={addCard} />
//         </div>
//         {cards.map((card, index) => (
//           <PricingCard
//             key={index}
//             {...card}
//             onDelete={() => deleteCard(index)}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default PricingList;






import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const CardForm = ({ onAddCard }) => {
  const [formData, setFormData] = useState({
    price: "",
    users: "",
    storage: "",
    support: "Email support",
    planName: "Custom Plan",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddCard(formData);
    setFormData({
      price: "",
      users: "",
      storage: "",
      support: "Email support",
      planName: "Custom Plan",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded shadow-sm">
      <h4 className="mb-3">Створити нову картку</h4>

      <div className="mb-2">
        <label className="form-label">Назва плану</label>
        <input
          type="text"
          name="planName"
          className="form-control"
          value={formData.planName}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-2">
        <label className="form-label">Ціна ($)</label>
        <input
          type="number"
          name="price"
          className="form-control"
          value={formData.price}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-2">
        <label className="form-label">Кількість юзерів</label>
        <input
          type="number"
          name="users"
          className="form-control"
          value={formData.users}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-2">
        <label className="form-label">Обсяг пам’яті (GB)</label>
        <input
          type="number"
          name="storage"
          className="form-control"
          value={formData.storage}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-2">
        <label className="form-label">Тип підтримки</label>
        <select
          name="support"
          className="form-select"
          value={formData.support}
          onChange={handleChange}
        >
          <option>Email support</option>
          <option>Priority email support</option>
          <option>Phone and email support</option>
        </select>
      </div>

      <button type="submit" className="btn btn-primary w-100 mt-2">
        Додати картку
      </button>
    </form>
  );
};

const PricingCard = ({ planName, price, users, storage, support, onDelete, onSelect, isSelected }) => {
  return (
    <div className="col-md-4 position-relative">
      <div className={`card mb-4 shadow-sm ${isSelected ? "border-primary" : ""}`}>
        <div className={`card-header ${isSelected ? "bg-primary text-white" : "bg-light"}`} onClick={onSelect} style={{ cursor: "pointer" }}>
          <h5 className="text-center">{planName}</h5>
        </div>
        <div className="card-body">
          <button
            className="btn btn-danger btn-sm position-absolute top-0 end-0 m-2"
            onClick={onDelete}
          >
            ❌
          </button>
          <h1 className="card-title pricing-card-title">
            ${price} <small className="text-muted">/ mo</small>
          </h1>
          <ul className="list-unstyled mt-3 mb-4">
            <li>{users} users included</li>
            <li>{storage} GB of storage</li>
            <li>{support}</li>
            <li>Help center access</li>
          </ul>
          <button className="w-100 btn btn-lg btn-outline-primary">
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
};

const PricingList = () => {
  const [cards, setCards] = useState([
    { planName: "Free", price: 0, users: 10, storage: 2, support: "Email support" },
    { planName: "Pro", price: 15, users: 20, storage: 10, support: "Priority email support" },
    { planName: "Enterprise", price: 29, users: 30, storage: 15, support: "Phone and email support" },
  ]);
  
  const [selectedPlan, setSelectedPlan] = useState(null);

  const addCard = (newCard) => {
    setCards([...cards, newCard]);
  };

  const deleteCard = (index) => {
    setCards(cards.filter((_, i) => i !== index));
  };

  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-md-4">
          <CardForm onAddCard={addCard} />
        </div>
        {cards.map((card, index) => (
          <PricingCard
            key={index}
            {...card}
            onDelete={() => deleteCard(index)}
            onSelect={() => setSelectedPlan(index)}
            isSelected={selectedPlan === index}
          />
        ))}
      </div>
    </div>
  );
};

export default PricingList;
