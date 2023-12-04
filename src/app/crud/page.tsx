import TableUser from "./components/table.user";

const CRUDPage = async ({ searchParams }: {
    searchParams: { [key: string]: string | string[] | undefined }
}) => {

    const ACCESS_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ0b2tlbiBsb2dpbiIsImlzcyI6ImZyb20gc2VydmVyIiwiX2lkIjoiNjUzNzgwY2RlZTlhNWM4Nzk4YzIwMDNiIiwiZW1haWwiOiJhZG1pbkBnbWFpbC5jb20iLCJhZGRyZXNzIjoiVmlldE5hbSIsImlzVmVyaWZ5Ijp0cnVlLCJuYW1lIjoiSSdtIGFkbWluIiwidHlwZSI6IlNZU1RFTSIsInJvbGUiOiJBRE1JTiIsImdlbmRlciI6Ik1BTEUiLCJhZ2UiOjY5LCJpYXQiOjE3MDE0Mjc0MDIsImV4cCI6MTc4NzgyNzQwMn0.k5aNmHvktQ219Pb0Ylx3n_n1SyCf_kO_OI-d3iv8ma4";
    const LIMIT = 5;
    const page = Number(searchParams?.page) || 1;

    const res = await fetch(
        `http://localhost:8000/api/v1/users?current=${page}&pageSize=${LIMIT}&sort=-updatedAt`,
        {
            headers: {
                'Authorization': `Bearer ${ACCESS_TOKEN}`,
                "Content-Type": "application/json",
            },
            // next: { tags: ['listUsers'] }
            cache: 'no-store'
        })

    const raw = await res.json();

    return (
        <div style={{ padding: "50px" }}>
            <TableUser
                raw={raw}
                access_token={ACCESS_TOKEN}
            />
        </div>
    )
}
export default CRUDPage;