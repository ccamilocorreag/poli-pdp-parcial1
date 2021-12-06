import { InputGroup, FormControl, FormLabel } from "react-bootstrap";

const Resume = () => {
    return (
        <div class="row align-items-center">
            <div class="col-4"></div>
            <div class="col-4 text-center">
                <FormLabel htmlFor="saldo-inicial">Saldo inicial:</FormLabel>
                <InputGroup className="mb-3" size="sm">
                    <InputGroup.Text>$</InputGroup.Text>
                    <FormControl id="saldo-inicial" aria-label="saldo-inicial" />
                </InputGroup>
            </div>
            <div class="col-4 text-center">
                <FormLabel htmlFor="saldo-final">Saldo final:</FormLabel>
                <InputGroup className="mb-3" size="sm">
                    <InputGroup.Text>$</InputGroup.Text>
                    <FormControl id="saldo-final" aria-label="saldo-final" readOnly />
                </InputGroup>
            </div>
        </div>
    );
};

export default Resume;
