<%@ Page Title="" Language="C#" MasterPageFile="~/MasterPage.master" AutoEventWireup="true" CodeFile="Listing_Description.aspx.cs" Inherits="Listing_Description"  %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" Runat="Server">
<link href="Styles.css" rel="stylesheet" type="text/css" />
    <title>Listing Description</title>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" Runat="Server">
        <div>
            <table id="panel_padding">
                <tr>
                    <td>
                    <asp:Label ID="lbl_picture" runat="server" Text="Pictures:"></asp:Label>
                    </td>
                    <td>
                    <asp:FileUpload ID="FileUpload1" runat="server" />
                    </td>
                </tr>

                <tr>
                    <td>
                    <asp:Label ID="lbl_Model" runat="server" Text="Car Model:"></asp:Label>
                    </td>
                    <td>
                    <asp:TextBox ID="Txt_Model" runat="server"></asp:TextBox>
                    </td>
                </tr>

                <tr>
                    <td>
                    <asp:Label ID="lbl_Make" runat="server" Text="Car Make"></asp:Label>
                    </td>
                    <td>
                    <asp:TextBox ID="Txt_Make" runat="server"></asp:TextBox>
                    </td>
                </tr>
                <tr>
                    <td>
                    <asp:Label ID="lbl_Milage" runat="server" Text="Milage"></asp:Label>
                    </td>
                    <td>
                    <asp:TextBox ID="Txt_Milage" runat="server"></asp:TextBox>
                    </td>
                </tr>
                <tr>
                    <td>
                    <asp:Label ID="lbl_Engine" runat="server" Text="Engine"></asp:Label>
                    </td>
                    <td>
                    <asp:TextBox ID="Txt_Engine" runat="server"></asp:TextBox>
                    </td>
                </tr>
                <tr>
                    <td>
                    <asp:Label ID="lbl_Condition" runat="server" Text="Condition of Car"></asp:Label>
                    </td>
                    <td>
                    <asp:TextBox ID="Txt_Condition" runat="server"></asp:TextBox>
                    </td>
                </tr>
                <tr>
                    <td>

                        <asp:Label ID="lbl_Confirm" runat="server" Text=""></asp:Label>

                    </td>
                    <td>
                        <asp:Button ID="btn_submit" runat="server" Text="Submit" OnClick="btn_submit_Click" />
                    </td>
                </tr>
            </table>
        </div>
</asp:Content>

