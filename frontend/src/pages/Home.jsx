class Home extends React.Component {
  
  state = {
    descriptionList: {
      api: 'Application Programming Interface',
      html: 'Hyper Text Markup Language',
      css: 'Cascading Style Sheets',
      ajax: 'Asynchronous JavaScript And XML',
    }
  };

  render() {
    return (
      <>
        <h2>설명 목록 리스트 렌더링</h2>
        <dl>
          {
            Object.entries(this.state.descriptionList).map(([key,value])=>{
              return(
                <React.Fragment key={key}>
                  <dt>{key.toUpperCase()}</dt>
                  <dd>{value}</dd>
                </React.Fragment>
              );
            })
          }
          
        </dl>
      </>
        
    );
  }

}

export default Home;
