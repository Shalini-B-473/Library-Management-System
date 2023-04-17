import React from "react";
import Books from "./books.json";
import { DropdownButton, Pagination, FormControl, InputGroup, Button } from "react-bootstrap";
import { Dropdown } from "react-bootstrap";
import { FaSearch } from 'react-icons/fa';

class FilterPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      booksPerPage: 10,
      DropdownValue: '',
      searchValue: ''
    };
    this.handlePageChange = this.handlePageChange.bind(this);
  }

  handlePageChange(event) {
    this.setState({
      currentPage: Number(event.target.text)
    });
  }

  handleSelect = (event) => {
    // console.log(event);
    this.setState({ DropdownValue: event }, () => {
      console.log(this.state.DropdownValue);
    });
  }
  handleSearch = () => {
    const search = document.getElementById('search').value;
    console.log(search);
    this.setState({ searchValue: search });
  }

  render() {
    const { currentPage, booksPerPage, DropdownValue, searchValue } = this.state;

    // Logic for displaying current books based on the selected filter and search input
    const filteredBooks = Books.books.filter((book) => {
      if (!DropdownValue || DropdownValue === '---Select a Filter---') {
        return true;
      } else if (DropdownValue === 'Title') {
        return book.Title.toLowerCase().includes(searchValue.toLowerCase());
      } else if (DropdownValue === 'Author') {
        return book.Author.toLowerCase().includes(searchValue.toLowerCase());
      } else if (DropdownValue === 'Subject') {
        return book.Subject.toLowerCase().includes(searchValue.toLowerCase());
      } else if (DropdownValue === 'Publish Date') {
        return book.Publish_Date.toLowerCase().includes(searchValue.toLowerCase());
      }
    });

  
    //displaying current books based on pagination
    const indexOfLastBook = currentPage * booksPerPage;
    const indexOfFirstBook = indexOfLastBook - booksPerPage;
    const currentBooks = filteredBooks.slice(indexOfFirstBook, indexOfLastBook);

    //displaying page numbers
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(filteredBooks.length / booksPerPage); i++) {
      pageNumbers.push(
        <Pagination.Item key={i} active={i === currentPage} onClick={this.handlePageChange}>
          {i}
        </Pagination.Item>
      );
    }
    const countOfBooks = filteredBooks.length;
    console.log(countOfBooks);
    return (
      <div>
        <div className="d-flex justify-content-end" style={{marginRight : "9%"}}>
            <label style = {{margin : "10px"}}>Filter by</label>

            <DropdownButton onSelect={this.handleSelect} title={DropdownValue || "---Select a Filter---"} style = {{margin : "10px"}} >
              <Dropdown.Item eventKey="Title">Title</Dropdown.Item>
              <Dropdown.Item eventKey="Author">Author</Dropdown.Item>
              <Dropdown.Item eventKey="Subject">Subject</Dropdown.Item>
              <Dropdown.Item eventKey="Publish Date">Publish Date</Dropdown.Item>
            </DropdownButton>


          <InputGroup className="w-25" style = {{margin : "10px"}}>
          <FormControl placeholder="Search..." id="search" onChange={(event) => this.setState({ searchValue: event.target.value })}/>
            <Button variant="outline-secondary" onClick={this.handleSearch}>
              <FaSearch />
            </Button>
          </InputGroup>

        </div>

        <table className="table table-striped table-bordered table-hover" style={{width : "80%" , marginLeft : "10%"}} >
          <thead>
            <tr>
              <th>Title</th>
              <th>Author</th>
              <th>Subject</th>
              <th>Publish Date</th>
            </tr>
          </thead>
          <tbody>
            {currentBooks.map((book, index) => (
              <tr key={index}>
                <td>{book.Title}</td>
                <td>{book.Author}</td>
                <td>{book.Subject}</td>
                <td>{book.Publish_Date}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <Pagination style={{marginLeft : "10%"}}>{pageNumbers}</Pagination>
        <h3 style={{marginLeft : "10%"}}>Number of books : {countOfBooks}</h3>
      </div>
    );
  }
}

export default FilterPage;
