

function ShipmentForm() {
    return (
        <div>
            <h4 className="heading container-fluid mt-4 mb-2 aos-item " >Fill the form to
                ship</h4>

            <div className="shipping container-fluid bg-light mt-4 pb-4 aos-item " >
                <form className="row g-3">
                    <div className="col-md-6">
                        <label for="inputEmail4" className="form-label">From</label>
                        <input type="text" className="form-control" id="inputEmail4"/>
                    </div>
                    <div className="col-md-6">
                        <label for="inputPassword4" className="form-label">To</label>
                        <input type="text" className="form-control" id="inputPassword4"/>
                    </div>
                    <div className="col-6">
                        <label for="inputAddress" className="form-label">What are you shipping?</label>
                        <input type="text" className="form-control" id="inputAddress" placeholder=""/>
                    </div>
                    <div className="col-6">
                        <label for="inputAddress" className="form-label">Weight(KG)</label>
                        <input type="number" className="form-control" id="inputAddress" placeholder=""/>
                    </div>
                    <div className="col-6">
                        <label for="inputAddress" className="form-label">Phone</label>
                        <input type="number" className="form-control" id="inputAddress" placeholder=""/>
                    </div>
                    <div className="col-6">
                        <label for="inputAddress" className="form-label">Email</label>
                        <input type="text" className="form-control" id="inputAddress" placeholder=""/>
                    </div>
                    <div className="col-md-6">
                        <label for="inputCity" className="form-label">First Name</label>
                        <input type="text" className="form-control" id="inputCity"/>
                    </div>
                    <div className="col-md-6">
                        <label for="inputCity" className="form-label">Last Name</label>
                        <input type="text" className="form-control" id="inputCity"/>
                    </div>
                    <div className="col-12">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="gridCheck"/>
                            <label className ="form-check-label" for="gridCheck">
                            Confirm
                            </label>
                        </div>
                    </div>
                    <div className="col-12">
                        <button type="submit" className="btn btn-primary btn-lg">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}


export default ShipmentForm;