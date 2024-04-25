import React from "react";

const BasicInfoTable = ({ user }) => {
    return (
        <table className="profile-table">
            <tbody>
                <tr className="row">
                    <td className="info">name :</td>
                    <td className="value number">
                        {user?.username || "Unknown"}
                    </td>
                </tr>
                <tr className="row">
                    <td className="info">department</td>
                    <td className="value number">
                        {user?.department || "Not available"}
                    </td>
                </tr>
                <tr className="row">
                    <td className="info">email</td>
                    <td className="value tt-none">
                        {user?.email || "Not avaialbe"}
                    </td>
                </tr>
                <tr className="row">
                    <td className="info">Address :</td>
                    <td className="value number">
                        {user?.address || "Not avaialbe"}
                    </td>
                </tr>
                <tr className="row">
                    <td className="info">Mobile :</td>
                    <td className="value number">
                        {user?.contact || "Not avaialbe"}
                    </td>
                </tr>
            </tbody>
        </table>
    );
};

export default BasicInfoTable;
