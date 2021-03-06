// SPDX-License-Identifier: agpl-3.0
pragma solidity ^0.6.10;

contract AddressStorage {
    mapping(bytes32 => address) private addresses;

    function getAddress(bytes32 _key) public view returns (address) {
        address result = addresses[_key];
        require(result != address(0), "AddressStorage: Address not found");
        return result;
    }

    function _setAddress(bytes32 _key, address _value) internal {
        addresses[_key] = _value;
    }

}
