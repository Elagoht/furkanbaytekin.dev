class Environment {
  public static readonly CMS_API_URL =
    process.env.CMS_API_URL!
  public static readonly HOST_URL =
    process.env.HOST_URL!
  public static readonly PAGINATE_BY =
    Number(process.env.PAGINATE_BY!)
  public static readonly TRUSTED_SOFTWARE_TOKEN =
    process.env.TRUSTED_SOFTWARE_TOKEN!
  public static readonly WEBHOOK_SECRET =
    process.env.WEBHOOK_SECRET!
}

export default Environment