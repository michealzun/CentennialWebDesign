<%@ Page Language="C#" AutoEventWireup="true" CodeFile="UserList.aspx.cs" Inherits="UserList" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
</head>
<body>
    <form id="form1" runat="server">
    <div id="bookList">
            <asp:GridView id="usersGrid" runat="server" AllowPaging="True" AllowSorting="True" OnPageIndexChanging="usersGrid_PageIndexChanging" OnSorting="usersGrid_Sorting" AutoGenerateColumns="False" OnSelectedIndexChanged="usersGrid_SelectedIndexChanged">
                <Columns>
                <asp:TemplateField HeaderText="Username" SortExpression="Username">
                        <ItemTemplate>
                            <asp:LinkButton runat="server" ID="Username" ShowSelectButton="True" ShowCancelButton="False" Text='<%# Eval("Username") %>' OnClick="Username_Click"></asp:LinkButton>
                        </ItemTemplate>
                    </asp:TemplateField>
                </Columns>
            </asp:GridView>
        </div>
    </form>
</body>
</html>
