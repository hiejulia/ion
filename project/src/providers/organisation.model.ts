export class OrganisationModel {
  _id: string;
  name: string;
  slug: string;
  location:string;
  description:string;
  owner: string;
  members: Array<string>;
  country: string;
  address: string;
  createdAt: string;
  numberOfEmployees:number;

  constructor(
    _id?: string,
    name?: string,
    slug?: string,
    owner?: string,
    members?: Array<string>,
    country?: string,
    address?: string,
    createdAt?: string,
    description?:string,
    location?:string,
    numberOfEmployees?:number


  ) {
    this._id = _id;
    this.name = name;
    this.slug = slug;
    this.owner = owner;
    this.members = members;
    this.country = country;
    this.address = address;
    this.createdAt = createdAt;
    this.description = description;
    this.location = location;
    this.numberOfEmployees = numberOfEmployees;
  }
}
