import React from "react";

const BasicInfoTable = () => {
    return (
        <table className="profile-table">
            <tbody>
                <tr className="row">
                    <td className="info">name :</td>
                    <td className="value number">samsuzzaman</td>
                </tr>
                <tr className="row">
                    <td className="info">department</td>
                    <td className="value number">
                        electrical and electronic engineering
                    </td>
                </tr>
                <tr className="row">
                    <td className="info">email</td>
                    <td className="value tt-none">testingtesting@gmail.com</td>
                </tr>
                <tr className="row">
                    <td className="info">Address :</td>
                    <td className="value number">kushtia, dhaka, bangladesh</td>
                </tr>
                <tr className="row">
                    <td className="info">Mobile :</td>
                    <td className="value number">+800-00000000000</td>
                </tr>
            </tbody>
        </table>
    );
};

export default BasicInfoTable;
