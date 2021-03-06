import React, { useState } from 'react';
import { API } from '../../config';
import TablePagination from 'rsuite/lib/Table/TablePagination';
import dayjs from 'dayjs';
import { Button, Icon, Modal, Table } from 'rsuite';

export default function PaginationTable({
  data,
  total,
  page,
  loading,
  handleChangePage,
  handleChangeLength,
  displayLength,
  handleAction,
  onDisableUnable,
  handlePreview,
}) {
  const [show, setShow] = useState(false);
  const [state, setState] = useState('');

  const onDisable = (data) => {
    setState(data);
    setShow(true);
  };

  const close = () => {
    setShow(false);
  };

  const disableModal = (data) => {
    return (
      <div className='modal-container'>
        <Modal backdrop='static' show={show} onHide={close} size='xs'>
          <Modal.Body>
            <Icon
              icon='remind'
              style={{
                color: '#ffb300',
                fontSize: 40,
                paddingRight: 10,
                float: 'left',
              }}
            />
            <p>
              Once{' '}
              <span className='badge badge-info badge-pill'>{data.nom}</span> is
              disabled, the establishment and all its products will no longer be
              visible in the application until reactivation.
            </p>
            <p className='mt-2'>Are you sure you want to proceed?</p>
          </Modal.Body>
          <Modal.Footer>
            <Button
              onClick={() => {
                onDisableUnable(data);
                setShow(false);
              }}
              color='red'
            >
              Disable
            </Button>
            <Button onClick={close} appearance='subtle'>
              Cancel
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  };

  return (
    <div>
      {show && disableModal(state)}
      <Table height={370} data={data} rowHeight={60} loading={loading}>
        <Table.Column width={150} align='center'>
          <Table.HeaderCell>Image</Table.HeaderCell>
          <Table.Cell className='cell-image'>
            {(data) => (
              <div className='cell-image'>
                <div className='image-container'>
                  <img
                    className='image'
                    src={`${API}/${data.image}`}
                    alt={data.nom}
                  />
                </div>
              </div>
            )}
          </Table.Cell>
        </Table.Column>

        <Table.Column width={200} resizable={true}>
          <Table.HeaderCell>Name</Table.HeaderCell>
          <Table.Cell>{(data) => data.nom}</Table.Cell>
        </Table.Column>

        <Table.Column width={150}>
          <Table.HeaderCell>Hours</Table.HeaderCell>
          <Table.Cell>
            {(data) => (
              <span>
                From {data.heure && dayjs(data.heure.ouverture).format('HH:mm')}{' '}
                To {data.heure && dayjs(data.heure.fermeture).format('HH:mm')}
              </span>
            )}
          </Table.Cell>
        </Table.Column>

        <Table.Column width={200}>
          <Table.HeaderCell>Type</Table.HeaderCell>
          <Table.Cell>
            {(data) => <span>{data.type && data.type.nom}</span>}
          </Table.Cell>
        </Table.Column>

        <Table.Column width={100}>
          <Table.HeaderCell>Status</Table.HeaderCell>
          <Table.Cell>
            {(data) => (
              <span>
                {data.disable && data.disable ? (
                  <span className='badge badge-danger badge-pill'>
                    Disabled
                  </span>
                ) : (
                  <span className='badge badge-info badge-pill'>Active</span>
                )}
              </span>
            )}
          </Table.Cell>
        </Table.Column>

        <Table.Column width={200}>
          <Table.HeaderCell>Localisation</Table.HeaderCell>
          <Table.Cell>
            {(data) => (
              <span>
                Long: {data.localisation.long}- Lat: {data.localisation.lat}
              </span>
            )}
          </Table.Cell>
        </Table.Column>

        <Table.Column width={300}>
          <Table.HeaderCell>Description</Table.HeaderCell>
          <Table.Cell dataKey='description' />
        </Table.Column>

        <Table.Column width={200}>
          <Table.HeaderCell>Last updated date</Table.HeaderCell>
          <Table.Cell>
            {(data) => dayjs(data.updatedAt).format('dddd, DD MMMM YYYY - HH:mm')}
          </Table.Cell>
        </Table.Column>

        <Table.Column width={180} align='center' fixed='right'>
          <Table.HeaderCell>Action</Table.HeaderCell>

          <Table.Cell>
            {(data) => {
              return (
                <>
                  <button
                    onClick={() => handleAction(data)}
                    title='Edit'
                    className='btn btn-success btn-sm btn-border box-shadow btn-circle m-1'
                  >
                    <i className='fa fa-edit'></i>
                  </button>
                  <button
                    title={data.disable ? 'Activate' : 'Disable'}
                    onClick={() =>
                      data.disable ? onDisableUnable(data) : onDisable(data)
                    }
                    className={`btn ${
                      !data.disable ? 'btn-danger' : 'btn-info'
                    } btn-sm btn-border box-shadow btn-circle m-1`}
                  >
                    <i
                      className={`fa ${
                        !data.disable ? 'fa-times' : 'fa-check'
                      }`}
                    ></i>
                  </button>
                  <button
                    onClick={() => handlePreview(data)}
                    title='Preview'
                    className='btn btn-info btn-sm btn-border box-shadow btn-circle m-1'
                  >
                    <i className='fa fa-eye'></i>
                  </button>
                </>
              );
            }}
          </Table.Cell>
        </Table.Column>
      </Table>

      <TablePagination
        lengthMenu={[
          {
            value: 5,
            label: 5,
          },
          {
            value: 10,
            label: 10,
          },
          {
            value: 20,
            label: 20,
          },
          {
            value: 50,
            label: 50,
          },
        ]}
        activePage={page}
        displayLength={displayLength}
        total={total}
        onChangePage={handleChangePage}
        onChangeLength={handleChangeLength}
      />
    </div>
  );
}
