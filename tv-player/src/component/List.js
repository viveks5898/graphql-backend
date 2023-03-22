import React from "react";
const List = (props) => {


  return (

    <>
    <div className="list-vidoe">
      <h3> Coming up</h3>
      {props.data.slice(props.startItem, props.showItem).map((ele, key) => (
        <div
          className="row mb-3"
          onClick={() => props.handleList(key)}
          key={key}
        >
          <div className="col-4 list-img">
            <img src={ele.image} />
          </div>
          <div className="col-8">
            <h4>{ele.name} </h4>
            <h6>{ele.subtitle}</h6>
          </div>
        </div>
      ))}
      {props.data.slice(props.startItem, props.showItem).length == 10 ? (
         <i    onClick={() => props.arrowHandle()}
        className="arrow-key fa fa-sort-desc" aria-hidden="true"></i>
      ) : (
        ""
      )}
    </div>
    <div className="list-vidoe-mobile">
      <h3> Coming up</h3>
      {props.data.slice(props.startItem, props.showItem).map((ele, key) => (
        <div
          className="row mb-3"
          onClick={() => props.handleList(key)}
          key={key}
        >
          <div className="col-4 list-img">
            <img src={ele.image} />
          </div>
          <div className="col-8">
            <h4>{ele.name} </h4>
            <h6>{ele.subtitle}</h6>
          </div>
        </div>
      ))}
      {props.data.slice(props.startItem, props.showItem).length == 10 ? (
        <p
          onClick={() => props.arrowHandle()}
          className="arrow-key"
        > <i class="fa fa-sort-desc" aria-hidden="true"></i>
        </p>
      ) : (
        ""
      )}
    </div>
    </>




  );
};

export default List;
