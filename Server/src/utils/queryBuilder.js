exports.buildQuery = (req, allowedFilters = {}) => {
  const q = req.query;
  const filter = {};

  // -------------------------------------
  // SIMPLE FILTERS
  // -------------------------------------
  for (const key in allowedFilters) {
    const rule = allowedFilters[key];

    if (q[key] !== undefined) {
      if (rule.type === "number") filter[key] = Number(q[key]);
      else if (rule.type === "array") {
        filter[key] = { $in: q[key].split(",").map(v => v.trim()) };
      }
      else filter[key] = q[key];
    }
  }

  // -------------------------------------
  // DATE RANGE FILTERS
  // -------------------------------------
  if (q.createdStart || q.createdEnd) {
    filter.createdAt = {};
    if (q.createdStart) filter.createdAt.$gte = new Date(q.createdStart);
    if (q.createdEnd) filter.createdAt.$lte = new Date(q.createdEnd);
  }

  if (q.updatedStart || q.updatedEnd) {
    filter.updatedAt = {};
    if (q.updatedStart) filter.updatedAt.$gte = new Date(q.updatedStart);
    if (q.updatedEnd) filter.updatedAt.$lte = new Date(updatedEnd);
  }

  // -------------------------------------
  // PAGINATION
  // -------------------------------------
  let page = parseInt(q.page) || 1;
  let limit = parseInt(q.limit) || 10;
  const skip = (page - 1) * limit;

  // -------------------------------------
  // SORTING
  // -------------------------------------
  const sortBy = q.sortBy || "createdAt";
  const order = q.order === "asc" ? 1 : -1;
  const sorting = { [sortBy]: order };

  return {
    filter,
    pagination: { page, limit, skip },
    sorting,
  };
};
