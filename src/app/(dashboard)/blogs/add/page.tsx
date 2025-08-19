import { AddBlogForm } from "./components/add-blog-form";

const Users = () => {
  return (
    <div className="min-h-screen flex flex-col gap-4">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight md:text-3xl">
            Add Blog
          </h1>
          <p className="text-muted-foreground">Add New Blog Post</p>
        </div>
      </div>

      <div>
        <AddBlogForm />
      </div>
    </div>
  );
};

export default Users;
