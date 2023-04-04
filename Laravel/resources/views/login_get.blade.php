<!DOCTYPE html>
<html>
    <head></head>
    <body>
        <form method="POST">
            @csrf
            <div class="mb-3">
                <label class="form-label">Username or email address</label>
                <input type="text" class="form-control" name="email">
            </div>
            <div class="mb-3">
                <label class="form-label">Password</label>
                <input type="password" class="form-control" name="password">
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    </body>
</html>
